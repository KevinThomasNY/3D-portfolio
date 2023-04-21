import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  Preload,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
const Experience = ({ theme }) => {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const src =
    theme === "dark"
      ? "https://3-d-portfolio-kevinthomasny.vercel.app/dark"
      : "https://3-d-portfolio-kevinthomasny.vercel.app/light";
  return (
    <>
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-0.1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#0F1624"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src={src} />
            </Html>
          </primitive>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default function Laptop({ theme }) {
  return (
    <Canvas
      style={{ touchAction: "none", zIndex: 1 }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [3, 1.5, 4.7],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Experience theme={theme} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
