import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface SceneProps {
  dark?: boolean;
}

function CyberPlanetaryStation({ dark = true }: { dark: boolean }) {
  const systemRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);
  const satellite1Ref = useRef<THREE.Mesh>(null);
  const satellite2Ref = useRef<THREE.Mesh>(null);
  const dustRef = useRef<THREE.Points>(null);

  const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Outer orbital dust field
  const dustPositions = useMemo(() => {
    const count = 220;
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      coords[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      coords[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      coords[i * 3 + 2] = radius * Math.cos(phi);
    }
    return coords;
  }, []);

  useFrame((state, delta) => {
    // Smooth mouse coordinates for 3D tilt
    mouse.current.targetX = state.pointer.x * 0.9;
    mouse.current.targetY = state.pointer.y * 0.9;
    mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.05;
    mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.05;

    const time = state.clock.getElapsedTime();

    if (systemRef.current) {
      // Main station slow rotation + reactive cursor tilt
      systemRef.current.rotation.y = time * 0.15;
      systemRef.current.rotation.x = -mouse.current.y * 0.4 + Math.sin(time * 0.3) * 0.05;
      systemRef.current.rotation.z = mouse.current.x * 0.25;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y = -time * 0.3;
      coreRef.current.rotation.x = time * 0.2;
      const scale = 1 + Math.sin(time * 2) * 0.03;
      coreRef.current.scale.set(scale, scale, scale);
    }

    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.22;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.18;
    }

    // Orbiting Satellites on elliptical paths
    if (satellite1Ref.current) {
      const angle1 = time * 0.9;
      const r1 = 2.3;
      satellite1Ref.current.position.x = Math.cos(angle1) * r1;
      satellite1Ref.current.position.y = Math.sin(angle1) * 0.6;
      satellite1Ref.current.position.z = Math.sin(angle1) * r1;
    }

    if (satellite2Ref.current) {
      const angle2 = -time * 0.65 + Math.PI;
      const r2 = 2.8;
      satellite2Ref.current.position.x = Math.cos(angle2) * r2;
      satellite2Ref.current.position.y = Math.sin(angle2) * (r2 * 0.85);
      satellite2Ref.current.position.z = Math.cos(angle2) * 0.7;
    }

    if (dustRef.current) {
      dustRef.current.rotation.y = -time * 0.06;
    }
  });

  const cyan = '#38bdf8';
  const violet = '#818cf8';
  const lightBlue = '#bae6fd';
  const gridWire = dark ? '#1e293b' : '#cbd5e1';

  return (
    <group ref={systemRef}>
      {/* 1. Holographic Planetary Core Sphere */}
      <mesh>
        <sphereGeometry args={[1.35, 24, 24]} />
        <meshBasicMaterial
          wireframe
          color={dark ? '#0284c7' : '#38bdf8'}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* 2. Inner Quantum Data Engine */}
      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.72, 0]} />
        <meshBasicMaterial
          wireframe
          color={cyan}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* 3. Glowing Center Singularity */}
      <mesh>
        <sphereGeometry args={[0.24, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>

      {/* 4. Primary Orbital Equatorial Ring */}
      <group ref={ring1Ref} rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <ringGeometry args={[1.85, 2.05, 48]} />
          <meshBasicMaterial
            color={cyan}
            wireframe
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 5. Secondary Inclined Cybernetic Ring */}
      <group ref={ring2Ref} rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <mesh>
          <ringGeometry args={[2.3, 2.38, 56]} />
          <meshBasicMaterial
            color={violet}
            wireframe
            transparent
            opacity={0.4}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>

      {/* 6. Orbital Satellite 1 (Alpha Relay) */}
      <mesh ref={satellite1Ref}>
        <boxGeometry args={[0.15, 0.15, 0.15]} />
        <meshBasicMaterial color={cyan} />
      </mesh>

      {/* 7. Orbital Satellite 2 (Beta Telemetry Probe) */}
      <mesh ref={satellite2Ref}>
        <octahedronGeometry args={[0.16, 0]} />
        <meshBasicMaterial color={violet} />
      </mesh>

      {/* 8. Outer Coordinate Orbit Dust */}
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dustPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.042}
          color={lightBlue}
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      {/* 9. Holographic Radar / Telemetry Compass Grid */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.95, 3.0, 64]} />
        <meshBasicMaterial
          color={gridWire}
          transparent
          opacity={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export default function HeroScene({ dark = true }: SceneProps) {
  return (
    <Canvas
      className="webgl-canvas"
      camera={{ position: [0, 0.2, 5.2], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.6} />
      <CyberPlanetaryStation dark={dark} />
    </Canvas>
  );
}
