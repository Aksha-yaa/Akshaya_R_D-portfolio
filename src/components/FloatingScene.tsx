import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  variant?: "primary" | "accent" | "mixed";
  density?: "low" | "medium" | "high";
  className?: string;
}

const FloatingShape = ({
  position,
  color,
  geometry,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  geometry: "icosahedron" | "torus" | "octahedron" | "dodecahedron";
  scale?: number;
}) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  const geo = {
    icosahedron: <icosahedronGeometry args={[0.6 * scale, 1]} />,
    torus: <torusGeometry args={[0.5 * scale, 0.15 * scale, 16, 32]} />,
    octahedron: <octahedronGeometry args={[0.5 * scale, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[0.4 * scale, 0]} />,
  };

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        {geo[geometry]}
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.08}
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </mesh>
    </Float>
  );
};

const FloatingScene = ({ variant = "primary", density = "low", className = "" }: Props) => {
  const primary = "#00e5ff";
  const accent = "#a855f7";

  const colors = variant === "primary" ? [primary, primary] : variant === "accent" ? [accent, accent] : [primary, accent];
  const sparkleCount = density === "high" ? 60 : density === "medium" ? 35 : 20;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[3, 3, 3]} intensity={0.4} color={colors[0]} />
        <pointLight position={[-3, -2, 2]} intensity={0.3} color={colors[1]} />

        <FloatingShape position={[-2.5, 1, -2]} color={colors[0]} geometry="icosahedron" />
        <FloatingShape position={[2.5, -1, -3]} color={colors[1]} geometry="torus" />
        {density !== "low" && (
          <>
            <FloatingShape position={[0, 2, -4]} color={colors[0]} geometry="octahedron" scale={0.8} />
            <FloatingShape position={[-1.5, -2, -2]} color={colors[1]} geometry="dodecahedron" scale={0.7} />
          </>
        )}
        {density === "high" && (
          <>
            <FloatingShape position={[3, 2, -5]} color={colors[0]} geometry="icosahedron" scale={0.5} />
            <FloatingShape position={[-3, -1, -4]} color={colors[1]} geometry="torus" scale={0.6} />
          </>
        )}
        <Sparkles count={sparkleCount} scale={10} size={1} speed={0.3} opacity={0.2} color={colors[0]} />
      </Canvas>
    </div>
  );
};

export default FloatingScene;
