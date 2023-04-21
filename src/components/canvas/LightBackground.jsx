import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

const Experience = ({ theme }) => {
  const texture = useRef();
  const sphere = useRef();
  const loader = new THREE.TextureLoader();
  texture.current = loader.load("./images/light_hero.jpeg");

  const geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  useFrame(({ clock }) => {
    sphere.current.rotation.y = clock.elapsedTime * 0.05;
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

export default function LightBackground({ theme }) {
  return (
    <div className="fixed left-0 top-0 h-full w-full">
      <Canvas>
        <Experience theme={theme} />
        <Preload all />
      </Canvas>
    </div>
  );
}
