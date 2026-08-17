"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, Stars } from "@react-three/drei";
import * as THREE from "three";

interface CivilizationProps {
  state: number;
}

function Civilization({ state }: CivilizationProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate procedural floating blocks
  const blocks = useMemo(() => {
    const arr = [];
    const count = 35;
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * radius;
      const z = Math.sin(theta) * radius;
      const y = (Math.random() - 0.5) * 1.5;
      
      const width = 0.3 + Math.random() * 0.6;
      const height = 0.5 + Math.random() * 2.5;
      const depth = 0.3 + Math.random() * 0.6;

      arr.push({
        position: [x, y, z] as [number, number, number],
        scale: [width, height, depth] as [number, number, number],
        speed: 0.1 + Math.random() * 0.3,
        delay: Math.random() * Math.PI * 2,
      });
    }
    return arr;
  }, []);

  // Generate procedural network connections
  const linePoints = useMemo(() => {
    const tempPoints = [];
    const count = 20;
    for (let i = 0; i < count; i++) {
      const p1 = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 6
      );
      const p2 = new THREE.Vector3(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 6
      );
      tempPoints.push(p1, p2);
    }
    return tempPoints;
  }, []);

  useFrame((threeState) => {
    if (!groupRef.current) return;

    const time = threeState.clock.getElapsedTime();

    // Base rotation based on scroll state
    const targetRotationY = state * (Math.PI / 3) + time * 0.05;
    const targetRotationX = (state * 0.08) + Math.sin(time * 0.2) * 0.05;
    const targetScale = 1.0 - (state * 0.04);
    const targetPositionY = -0.5 + (state * 0.1);

    // Lerp values for cinematic smoothness
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
    groupRef.current.scale.setScalar(THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.05));
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetPositionY, 0.05);

    // Dynamic rotation of particles
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * -0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central glowing monogram shape */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial 
            color="#7C3AED" 
            roughness={0.1}
            metalness={0.8}
            clearcoat={1.0}
            transmission={0.6}
            thickness={0.5}
            emissive="#4c1d95"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      {/* Floating civilization building blocks */}
      {blocks.map((block, idx) => (
        <mesh 
          key={idx} 
          position={block.position} 
          scale={block.scale}
        >
          <boxGeometry />
          <meshStandardMaterial 
            color={idx % 3 === 0 ? "#7C3AED" : idx % 3 === 1 ? "#A78BFA" : "#1e1b4b"}
            roughness={0.2}
            metalness={0.5}
            transparent
            opacity={0.7 + 0.1 * Math.sin(idx)}
          />
        </mesh>
      ))}

      {/* Connection Lines (Network Infrastructure) */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(linePoints.flatMap(p => [p.x, p.y, p.z])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color="#A78BFA" 
          transparent 
          opacity={0.3 + 0.1 * Math.sin(state)} 
          linewidth={1}
        />
      </lineSegments>

      {/* Floating technological particle nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                Array.from({ length: 300 }).flatMap(() => [
                  (Math.random() - 0.5) * 12,
                  (Math.random() - 0.5) * 6,
                  (Math.random() - 0.5) * 12
                ])
              ),
              3
            ]}
          />
        </bufferGeometry>
        <pointsMaterial 
          color="#7C3AED" 
          size={0.06} 
          sizeAttenuation 
          transparent 
          opacity={0.6} 
        />
      </points>

      {/* Subtle floor grid projection */}
      <gridHelper args={[20, 20, "#7C3AED", "#1e1b4b"]} position={[0, -2, 0]} />
    </group>
  );
}

export default function HeroScene({ state = 0 }: { state?: number }) {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 3, 9], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#A78BFA" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#7C3AED" />
        
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
        
        <Civilization state={state} />
        
        {/* Soft interactive user control if they scroll/hover */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
