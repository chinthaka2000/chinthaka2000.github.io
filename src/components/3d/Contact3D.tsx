"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Sphere } from "@react-three/drei";
import * as THREE from "three";

function Satellite() {
  const group = useRef<THREE.Group>(null!);

  useFrame((state) => {
    group.current.rotation.y += 0.005;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime / 2) * 0.1;
  });

  return (
    <group ref={group} rotation={[0.5, 0, 0]}>
      {/* Central Core */}
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial color="#333" roughness={0.2} metalness={0.8} />
      </Sphere>

      {/* Rings */}
      <Torus args={[1.5, 0.05, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Torus>
      <Torus args={[2, 0.05, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.2} />
      </Torus>
      <Torus args={[2.5, 0.05, 16, 100]} rotation={[Math.PI / 4, 0, 0]}>
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.2} />
      </Torus>
    </group>
  );
}

function SignalRing({ delay, color }: { delay: number, color: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = (state.clock.elapsedTime + delay) % 3;
    ref.current.scale.setScalar(t * 2);
    (ref.current.material as THREE.MeshBasicMaterial).opacity = 1 - t / 3;
    if (t < 0.1) ref.current.scale.setScalar(0);
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.5, 0.6, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0} side={THREE.DoubleSide} />
    </mesh>
  );
}

export default function Contact3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Satellite />
        <SignalRing delay={0} color="#06b6d4" />
        <SignalRing delay={1} color="#06b6d4" />
        <SignalRing delay={2} color="#06b6d4" />
      </Canvas>
    </div>
  );
}
