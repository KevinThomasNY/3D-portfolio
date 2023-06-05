import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useAnimations,
  Environment,
  ContactShadows,
  useGLTF,
  Preload,
} from "@react-three/drei";
import CanvasLoader from "../Loader";
const Experience = () => {
  const druid = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf"
  );
  const animations = useAnimations(druid.animations, druid.scene);
  animations.clips[2].duration = 4;
  useEffect(() => {
    animations.actions.PortalOpen.play();
    window.setTimeout(() => {
      const waitingAction = animations.actions.Waiting.play();
      waitingAction.crossFadeFrom(animations.actions.PortalOpen, 1, true);
    }, 4100);
  }, []);

  return (
    <>
      <Environment path="/hdri/" files="potsdamer_platz_1k.hdr" />
      <primitive
        object={druid.scene}
        position={[0, 0, 0.9]}
        scale={1}
      ></primitive>

      <ContactShadows position-y={0} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default function Gandalf({ theme }) {
  return (
    <Canvas
      camera={{
        position: [0, 1.7, 2.8],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Experience />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
