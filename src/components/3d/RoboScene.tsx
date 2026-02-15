"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { Environment, Float, ContactShadows } from "@react-three/drei";

function CuteRobo() {
  const headRef = useRef<THREE.Group>(null!);
  const bodyRef = useRef<THREE.Group>(null!);
  const { mouse, viewport } = useThree();

  // Responsive positioning: If viewport is narrow (mobile), move robot to center or top
  // For now, let's keep it simple: Just bring it closer to center generally.
  const isMobile = viewport.width < 5;
  const robotX = isMobile ? 0 : 1.8; // Reduced from 2.5 to 1.8
  const robotY = isMobile ? 1 : -0.5;

  useFrame((state) => {
    if (!headRef.current) return;

    // Smooth mouse tracking for head
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    // Look at mouse
    headRef.current.lookAt(x, y, 5);

    // Slight body rotation to follow
    bodyRef.current.rotation.y = THREE.MathUtils.lerp(bodyRef.current.rotation.y, mouse.x * 0.3, 0.1);
    bodyRef.current.rotation.x = THREE.MathUtils.lerp(bodyRef.current.rotation.x, -mouse.y * 0.1, 0.1);
  });

  return (
    <group ref={bodyRef} position={[robotX, robotY, 0]}>
      <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.8} floatingRange={[-0.1, 0.1]}>

        {/* --- BODY --- */}
        {/* Main polished white sphere body */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.9, 64, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.1}
            metalness={0.1}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Glowing Ring / Neck */}
        <mesh position={[0, 0.85, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.05, 16, 64]} />
          <meshBasicMaterial color="#333" />
        </mesh>

        {/* --- HEAD --- */}
        <group ref={headRef} position={[0, 1.1, 0]}>
          {/* Glossy Black Face Screen */}
          <mesh position={[0, 0, 0]}>
            {/* Slightly flattened sphere for head */}
            <sphereGeometry args={[0.7, 64, 64]} />
            <meshStandardMaterial
              color="#111"
              roughness={0.0}
              metalness={0.8}
            />
          </mesh>

          {/* Expressive Eyes (Oval shapes) */}
          <group position={[0, 0.1, 0.62]} rotation={[0, 0, 0]}>
            <mesh position={[-0.22, 0, 0]}>
              <capsuleGeometry args={[0.12, 0.15, 4, 16]} />
              <meshBasicMaterial color="#00ffff" toneMapped={false} />
            </mesh>
            <mesh position={[0.22, 0, 0]}>
              <capsuleGeometry args={[0.12, 0.15, 4, 16]} />
              <meshBasicMaterial color="#00ffff" toneMapped={false} />
            </mesh>
          </group>

          {/* Antenna / Detail */}
          <mesh position={[0, 0.7, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 0.3]} />
            <meshStandardMaterial color="#888" />
          </mesh>
          <mesh position={[0, 0.85, 0]}>
            <sphereGeometry args={[0.08]} />
            <meshStandardMaterial color="#ff0055" emissive="#ff0055" emissiveIntensity={2} toneMapped={false} />
          </mesh>
        </group>

        {/* Floating Hands (Detached) */}
        <group position={[-1.1, 0.2, 0.2]}>
          <Float speed={4} rotationIntensity={0.5} floatIntensity={0.2}>
            <mesh>
              <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
              <meshStandardMaterial color="#fff" roughness={0.1} />
            </mesh>
          </Float>
        </group>
        <group position={[1.1, 0.2, 0.2]}>
          <Float speed={4} rotationIntensity={0.5} floatIntensity={0.2}>
            <mesh>
              <capsuleGeometry args={[0.15, 0.4, 4, 8]} />
              <meshStandardMaterial color="#fff" roughness={0.1} />
            </mesh>
          </Float>
        </group>

      </Float>
    </group>
  );
}

function Decoration() {
  return (
    <group position={[-2.5, 0, -2]}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Abstract shape behind text */}
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#555" transparent opacity={0.2} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <torusGeometry args={[1.8, 0.02, 16, 100]} />
          <meshStandardMaterial color="#D4FF00" transparent opacity={0.1} />
        </mesh>
      </Float>
    </group>
  )
}

export default function RoboScene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <fog attach="fog" args={['#050505', 5, 20]} />
        <ambientLight intensity={0.8} />

        {/* Colorful lighting for "cute" look */}
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#44aaff" />
        <pointLight position={[-10, -5, 5]} intensity={1} color="#ff44aa" />
        <spotLight position={[0, 10, 0]} angle={0.5} penumbra={1} intensity={1} color="#ffffff" />

        {/* <CuteRobo /> */}
        <Decoration />

        <ContactShadows resolution={1024} scale={10} blur={2.5} opacity={0.5} far={10} color="#000000" />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
