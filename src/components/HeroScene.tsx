import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const FloatingIcosahedron = ({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          distort={0.4}
          speed={2}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.4;
    ref.current.rotation.z = state.clock.elapsedTime * 0.2;
  });
  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.8, 0.25, 16, 32]} />
        <MeshWobbleMaterial
          color={color}
          transparent
          opacity={0.12}
          factor={0.6}
          speed={1}
        />
      </mesh>
    </Float>
  );
};

const FloatingOctahedron = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
  });
  return (
    <Float speed={1.8} rotationIntensity={1} floatIntensity={2.5}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const MouseFollower = () => {
  const ref = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!ref.current) return;
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, x, 0.05);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, y, 0.05);
    ref.current.rotation.x = state.clock.elapsedTime * 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <dodecahedronGeometry args={[0.4, 0]} />
      <MeshDistortMaterial
        color="#00e5ff"
        transparent
        opacity={0.25}
        distort={0.5}
        speed={3}
        roughness={0}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00e5ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const HeroScene = () => (
  <div className="absolute inset-0 z-[1]" style={{ pointerEvents: "none" }}>
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      dpr={[1, 1.5]}
      style={{ pointerEvents: "auto" }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00e5ff" />
      <pointLight position={[-5, -3, 3]} intensity={0.5} color="#a855f7" />

      <FloatingIcosahedron position={[-3.5, 1.5, -2]} color="#00e5ff" speed={0.8} />
      <FloatingIcosahedron position={[3.5, -1, -3]} color="#a855f7" speed={1.2} />
      <FloatingTorus position={[2.5, 2, -1]} color="#00e5ff" />
      <FloatingTorus position={[-2.5, -2, -2]} color="#a855f7" />
      <FloatingOctahedron position={[0, 3, -4]} color="#00e5ff" />
      <FloatingOctahedron position={[-4, 0, -3]} color="#a855f7" />
      <MouseFollower />
      <ParticleField />
      <Sparkles count={80} scale={12} size={1.5} speed={0.4} opacity={0.3} color="#00e5ff" />
    </Canvas>
  </div>
);

export default HeroScene;
