import React, { Suspense, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Experience = ({ theme }) => {
  const texture = useRef();
  const sphere = useRef();
  const loader = new THREE.TextureLoader();
  const src =
    theme === "dark"
      ? "./images/dark_contact_form.jpeg"
      : "./images/light_contact_form.jpeg";
  texture.current = loader.load(src);

  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  useFrame(({ clock }) => {
    sphere.current.rotation.y = clock.elapsedTime * 0.01;
  });

  return (
    <>
      <OrbitControls enableZoom={false} rotateSpeed={0.2} />
      <mesh ref={sphere} geometry={geometry} position={[0, 0, 0]}>
        <meshBasicMaterial map={texture.current} />
      </mesh>
    </>
  );
};

export default function Mail({ theme }) {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
        <Experience theme={theme} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
