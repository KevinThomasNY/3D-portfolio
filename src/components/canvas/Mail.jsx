import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Experience = ({ theme }) => {
  const sphere = useRef();
  
  const src = theme === "dark"
    ? "./images/dark_contact_form.jpeg"
    : "./images/light_contact_form.jpeg";

  const texture = useLoader(THREE.TextureLoader, src);

  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  useFrame(({ clock }) => {
    sphere.current.rotation.y = clock.elapsedTime * 0.01;
  });

  return (
    <>
      <OrbitControls enableZoom={false} rotateSpeed={0.2} />
      <mesh ref={sphere} geometry={geometry} position={[0, 0, 0]}>
        <meshBasicMaterial map={texture} />
      </mesh>
    </>
  );
};

export default function Mail({ theme }) {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Experience theme={theme} />
      </Suspense>
    </Canvas>
  );
}
