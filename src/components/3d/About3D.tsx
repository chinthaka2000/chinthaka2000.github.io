"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Laptop() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t)) / 5, 0.1);
  });

  return (
    <group ref={group} dispose={null}>
      <group rotation-x={-0.425} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={new THREE.MeshStandardMaterial({ color: "gray" })} geometry={new THREE.BoxGeometry(3, 2, 0.1)} />
        </group>
      </group>
      <mesh geometry={new THREE.BoxGeometry(3, 0.1, 2)} material={new THREE.MeshStandardMaterial({ color: "#333" })} />

      {/* Screen */}
      <group position={[0, 0.5, -0.9]} rotation={[0.4, 0, 0]}>
        <mesh geometry={new THREE.BoxGeometry(3, 2, 0.1)} material={new THREE.MeshStandardMaterial({ color: "#111" })} />
        <mesh position={[0, 0, 0.06]} geometry={new THREE.PlaneGeometry(2.8, 1.8)}>
          <meshBasicMaterial color="#D4FF00" />
        </mesh>
      </group>
    </group>
  );
}

function CodeBlock({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={ref} position={position}>
        <dodecahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial color="#888888" wireframe />
      </mesh>
    </Float>
  );
}

export default function About3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Laptop />
        <CodeBlock position={[-2, 1, 0]} />
        <CodeBlock position={[2, -1, 0]} />
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
