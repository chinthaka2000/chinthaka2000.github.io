"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

function PipelineNode({ position, label }: { position: [number, number, number]; label: string }) {
  return (
    <group position={position}>
      <Sphere args={[0.3, 32, 32]}>
        <meshStandardMaterial color="#333333" emissive="#ffffff" emissiveIntensity={0.2} />
      </Sphere>
      <Text position={[0, -0.6, 0]} fontSize={0.3} color="white" anchorX="center" anchorY="middle">
        {label}
      </Text>
    </group>
  );
}

function DataPacket({ path, speed = 1, offset = 0 }: { path: THREE.Vector3[]; speed?: number; offset?: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
      const t = (state.clock.elapsedTime * speed + offset) % 1;
      const curve = new THREE.CatmullRomCurve3(path);
      const position = curve.getPointAt(t);
      ref.current.position.copy(position);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshBasicMaterial color="#D4FF00" />
    </mesh>
  );
}

function Pipeline() {
  const nodes = [
    { pos: [-4, 0, 0], label: "Data Ingestion" },
    { pos: [-2, 1, 0], label: "Preprocessing" },
    { pos: [0, 0, 0], label: "Training" },
    { pos: [2, -1, 0], label: "Evaluation" },
    { pos: [4, 0, 0], label: "Deployment" },
  ] as const;

  const points = useMemo(() => nodes.map(n => new THREE.Vector3(...n.pos)), []);

  return (
    <group>
      {/* Visual Line for Pipeline */}
      <Line points={points} color="#374151" lineWidth={2} dashed={false} />

      {/* Nodes */}
      {nodes.map((node, i) => (
        <PipelineNode key={i} position={node.pos as [number, number, number]} label={node.label} />
      ))}

      {/* Flowing Data Packets */}
      <DataPacket path={points} speed={0.2} offset={0} />
      <DataPacket path={points} speed={0.2} offset={0.33} />
      <DataPacket path={points} speed={0.2} offset={0.66} />
    </group>
  );
}

export default function Pipeline3D() {
  return (
    <div className="h-[300px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Pipeline />
      </Canvas>
    </div>
  );
}
