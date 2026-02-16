"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, TrackballControls, Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function Word({ children, position }: { children: string; position: THREE.Vector3 }) {
  const color = new THREE.Color();
  const fontProps = { fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, "material-toneMapped": false };
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const over = (e: any) => {
    e.stopPropagation();
    setHovered(true);
    document.body.style.cursor = 'pointer';
  };
  const out = () => {
    setHovered(false);
    document.body.style.cursor = 'auto';
  };

  useFrame(({ camera }) => {
    if (ref.current) {
      // Make text look at camera
      ref.current.quaternion.copy(camera.quaternion);

      // Animate color
      (ref.current.material as THREE.MeshStandardMaterial).color.lerp(
        color.set(hovered ? "#D4FF00" : "#ffffff"),
        0.1
      );
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={0.5}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        position={position}
        {...fontProps}
      >
        {children}
        <meshStandardMaterial emissive="#333333" emissiveIntensity={0.5} />
      </Text>
    </Float>
  );
}

function Cloud({ count = 4, radius = 20, words }: { count?: number; radius?: number; words: string[] }) {
  // Create a count x count random words with spherical distribution
  const cloudWords = useMemo(() => {
    const temp: [THREE.Vector3, string][] = [];
    const spherical = new THREE.Spherical();

    // Improved spherical distribution (Fibonacci Sphere)
    for (let i = 0; i < words.length; i++) {
      const phi = Math.acos(-1 + (2 * i) / words.length);
      const theta = Math.sqrt(words.length * Math.PI) * phi;
      const p = new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta));
      temp.push([p, words[i]]);
    }
    return temp;
  }, [count, radius, words]);

  return (
    <>
      {cloudWords.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
      ))}
    </>
  );
}

export default function Skills3D() {
  const skills = [
    "Python", "TensorFlow", "PyTorch", "MLOps", "Docker", "Kubernetes", "AWS", "Azure",
    "React", "Next.js", "Three.js", "TypeScript", "Git", "CI/CD", "Linux", "SQL",
    "Hugging Face", "LangChain", "OpenAI", "FastAPI", "MongoDB", "PostgreSQL", "Redis",
    "Tailwind", "Figma", "Jira", "Grafana", "Prometheus"
  ];

  return (
    <div className="h-[600px] w-full cursor-grab active:cursor-grabbing relative z-10">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 50 }}>
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 0, 80]} />

        {/* Ambient environment */}
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Stars for background depth */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

        <Cloud words={skills} />

        {/* Auto-rotating controls */}
        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} />
      </Canvas>
    </div>
  );
}
