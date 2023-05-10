import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
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

  return (
    <>
      <Environment preset="city" />
      <primitive
        object={druid.scene}
        rotation={[0, 0, 0]}
        position={[0, 0, 1]}
        scale={1}
      ></primitive>

      <ContactShadows position-y={0} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default function Laptop({ theme }) {
  return (
    <Canvas
      camera={{
        position: [0, 1.6, 2.4],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Experience />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
