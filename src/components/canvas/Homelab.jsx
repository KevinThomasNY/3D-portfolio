import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  Environment,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const MODEL_PATH = "/models/homelab.glb";
const DRACO_PATH = "/draco/";
const MAX_HORIZONTAL_TILT = THREE.MathUtils.degToRad(5);
const MAX_VERTICAL_TILT = THREE.MathUtils.degToRad(1.5);
const MAX_HORIZONTAL_SHIFT = 0.025;
// Mirrors the approved Blender render's camera-to-target direction after the
// Blender Z-up to glTF Y-up coordinate conversion.
const FRONT_CAMERA_POSITION = [-0.36, 0.61, 2.25];
const SWITCH_LED_NAMES = Array.from(
  { length: 16 },
  (_, index) => `Switch_LED_${String(index + 1).padStart(2, "0")}`
);

function configureIndicator(object, color, baseColor, intensity) {
  if (!object?.isMesh) return null;

  const material = object.material.clone();
  material.name = `${object.name}_Runtime_Material`;
  material.color.set(baseColor);
  material.emissive = new THREE.Color(color);
  material.emissiveIntensity = intensity;
  material.needsUpdate = true;
  object.material = material;
  return material;
}

function createActivity(material, nextAt, idleRange, onRange, intensity) {
  return {
    material,
    nextAt,
    idleRange,
    onRange,
    intensity,
    isOn: false,
  };
}

function updateActivity(item, elapsed) {
  if (!item?.material || elapsed < item.nextAt) return;

  item.isOn = !item.isOn;
  item.material.emissiveIntensity = item.isOn ? item.intensity : 0.08;
  const [minimum, maximum] = item.isOn ? item.onRange : item.idleRange;
  const occasionalPause = !item.isOn && Math.random() > 0.86 ? 1.8 : 0;
  item.nextAt =
    elapsed + minimum + Math.random() * (maximum - minimum) + occasionalPause;
}

function HomelabModel({ pointer, reducedMotion, onReady }) {
  const { scene } = useGLTF(MODEL_PATH, DRACO_PATH);
  const group = useRef();
  const activity = useRef({ switch: [], nas: [] });

  const prepared = useMemo(() => {
    const clone = scene.clone(true);
    clone.updateMatrixWorld(true);

    const bounds = new THREE.Box3().setFromObject(clone);
    const center = bounds.getCenter(new THREE.Vector3());
    const minimumY = bounds.min.y - center.y;

    const switchMaterials = SWITCH_LED_NAMES.map((name, index) =>
      configureIndicator(
        clone.getObjectByName(name),
        "#55ef91",
        index < 12 ? "#17231c" : "#1e6f42",
        index < 12 ? 0 : 0.18
      )
    );

    const nasDriveMaterials = ["NAS_Drive_LED_01", "NAS_Drive_LED_02"].map(
      (name) =>
        configureIndicator(
          clone.getObjectByName(name),
          "#5fb7ff",
          "#16476d",
          0.08
        )
    );

    configureIndicator(
      clone.getObjectByName("NAS_Power_LED"),
      "#8ccaff",
      "#2c668f",
      0.85
    );
    configureIndicator(
      clone.getObjectByName("NAS_Status_LED"),
      "#5fb7ff",
      "#16476d",
      0.32
    );
    configureIndicator(
      clone.getObjectByName("Router_Status_LED"),
      "#f4f8ff",
      "#d7e4ee",
      0.75
    );
    const beelinkPowerLed = clone.getObjectByName("Beelink_Power_LED");
    if (beelinkPowerLed) {
      beelinkPowerLed.material = new THREE.MeshBasicMaterial({
        name: "Beelink_Power_LED_Runtime_Material",
        color: "#f2fbff",
        toneMapped: false,
      });
      // The source LED is nested inside the larger metallic button sphere.
      // Move it 2.8 mm toward the front after Blender-to-glTF conversion.
      beelinkPowerLed.position.z += 0.0028;
      beelinkPowerLed.scale.multiplyScalar(1.35);
    }
    configureIndicator(
      clone.getObjectByName("UPS_Display"),
      "#4bb8e8",
      "#0b5270",
      0.68
    );
    configureIndicator(
      clone.getObjectByName("UPS_Power_LED"),
      "#76bdff",
      "#2c6e9f",
      0.58
    );

    return { clone, center, minimumY, switchMaterials, nasDriveMaterials };
  }, [scene]);

  useEffect(() => {
    activity.current.switch = prepared.switchMaterials
      .slice(12)
      .filter(Boolean)
      .map((material, index) =>
        createActivity(
          material,
          0.25 + index * 0.31,
          [0.28, 1.45],
          [0.1, 0.42],
          0.82 + index * 0.08
        )
      );
    activity.current.nas = prepared.nasDriveMaterials
      .filter(Boolean)
      .map((material, index) =>
        createActivity(
          material,
          1.7 + index * 1.35,
          [2.4, 6.5],
          [0.08, 0.26],
          0.72
        )
      );

    onReady?.();
  }, [onReady, prepared]);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;

    const targetX = reducedMotion ? 0 : pointer.current.y * MAX_VERTICAL_TILT;
    const targetY = reducedMotion ? 0 : pointer.current.x * MAX_HORIZONTAL_TILT;
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      targetX,
      4.2,
      delta
    );
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      targetY,
      4.2,
      delta
    );
    group.current.position.x = THREE.MathUtils.damp(
      group.current.position.x,
      reducedMotion ? 0 : pointer.current.x * MAX_HORIZONTAL_SHIFT,
      4.2,
      delta
    );

    if (reducedMotion) {
      activity.current.switch.forEach((item) => {
        item.material.emissiveIntensity = 0.45;
      });
      activity.current.nas.forEach((item) => {
        item.material.emissiveIntensity = 0.12;
      });
      return;
    }

    const elapsed = clock.getElapsedTime();
    activity.current.switch.forEach((item) => updateActivity(item, elapsed));
    activity.current.nas.forEach((item) => updateActivity(item, elapsed));
  });

  return (
    <>
      <Bounds fit clip observe margin={1.16} maxDuration={0}>
        <group ref={group}>
          <primitive
            object={prepared.clone}
            position={prepared.center.clone().multiplyScalar(-1)}
          />
        </group>
      </Bounds>
      <ContactShadows
        position={[0, prepared.minimumY - 0.006, 0]}
        opacity={0.22}
        scale={1.6}
        blur={2.2}
        far={1.1}
        resolution={256}
      />
    </>
  );
}

export default function Homelab({ pointer, reducedMotion, onReady }) {
  return (
    <Canvas
      aria-label="Interactive 3D model of Kevin's homelab"
      dpr={[1, 1.65]}
      camera={{
        fov: 27,
        near: 0.01,
        far: 30,
        position: FRONT_CAMERA_POSITION,
      }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => {
        gl.outputColorSpace = THREE.SRGBColorSpace;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
        gl.toneMappingExposure = 1.08;
        gl.setClearColor(0x000000, 0);
      }}
    >
      <ambientLight intensity={0.68} color="#dce7f5" />
      <directionalLight
        position={[-2.4, 3.5, 2.7]}
        intensity={2.8}
        color="#ffd5ad"
      />
      <directionalLight
        position={[3.1, 1.6, -2.4]}
        intensity={1.15}
        color="#b6d9ff"
      />
      <Environment
        path="/hdri/"
        files="potsdamer_platz_1k.hdr"
        environmentIntensity={0.38}
      />
      <HomelabModel
        pointer={pointer}
        reducedMotion={reducedMotion}
        onReady={onReady}
      />
    </Canvas>
  );
}
