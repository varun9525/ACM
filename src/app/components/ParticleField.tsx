import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const { viewport, mouse: r3fMouse } = useThree();
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);
  
  // Count based on screen size for performance
  const count = useMemo(() => {
    const baseCount = Math.floor(window.innerWidth / 15);
    return Math.min(120, Math.max(40, baseCount));
  }, []);
  
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 1.5,
          (Math.random() - 0.5) * viewport.height * 1.5,
          0
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          0
        ),
        size: Math.random() * 0.05 + 0.02,
      });
    }
    return temp;
  }, [count, viewport.width, viewport.height]);

  const linePositions = useMemo(() => new Float32Array(count * 20 * 3), [count]);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    if (!meshRef.current || !linesRef.current) return;

    let lineIndex = 0;
    const lineGeometry = linesRef.current.geometry;
    const mousePos = new THREE.Vector3(
      (r3fMouse.x * viewport.width) / 2,
      (r3fMouse.y * viewport.height) / 2,
      0
    );

    particles.forEach((p, i) => {
      p.position.add(p.velocity);

      // Boundary check with wrap-around
      if (p.position.x > (viewport.width * 0.8) / 2) p.position.x = -(viewport.width * 0.8) / 2;
      if (p.position.x < -(viewport.width * 0.8) / 2) p.position.x = (viewport.width * 0.8) / 2;
      if (p.position.y > (viewport.height * 0.8) / 2) p.position.y = -(viewport.height * 0.8) / 2;
      if (p.position.y < -(viewport.height * 0.8) / 2) p.position.y = (viewport.height * 0.8) / 2;

      // Subtle mouse interaction
      const distToMouse = p.position.distanceTo(mousePos);
      if (distToMouse < 2) {
        const repulsion = p.position.clone().sub(mousePos).normalize().multiplyScalar(0.005 * (1 - distToMouse / 2));
        p.position.add(repulsion);
      }

      dummy.position.copy(p.position);
      dummy.scale.setScalar(p.size);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);

      // Connect lines (limit distance and number of lines for performance)
      let connections = 0;
      for (let j = i + 1; j < particles.length && connections < 5; j++) {
        const p2 = particles[j];
        const d = p.position.distanceTo(p2.position);
        if (d < 1.2) {
          linePositions[lineIndex++] = p.position.x;
          linePositions[lineIndex++] = p.position.y;
          linePositions[lineIndex++] = p.position.z;
          linePositions[lineIndex++] = p2.position.x;
          linePositions[lineIndex++] = p2.position.y;
          linePositions[lineIndex++] = p2.position.z;
          connections++;
        }
      }
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
    lineGeometry.attributes.position.needsUpdate = true;
    lineGeometry.setDrawRange(0, lineIndex / 3);
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[null!, null!, count]}>
        <circleGeometry args={[1, 8]} />
        <meshBasicMaterial color="#0066FF" transparent opacity={0.4} />
      </instancedMesh>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
  attach="attributes-position"
  count={linePositions.length / 3}
  array={linePositions}
  itemSize={3}
/>
        </bufferGeometry>
        <lineBasicMaterial
          color="#0066FF"
          transparent
          opacity={0.08}
          linewidth={1}
        />
      </lineSegments>
    </>
  );
}

function GradientOrbs() {
  const { viewport } = useThree();
  const orbs = useMemo(() => [
    { color: "#0066FF", pos: [-viewport.width / 4, viewport.height / 4, -2], size: 4, opacity: 0.1 },
    { color: "#00D4FF", pos: [viewport.width / 4, -viewport.height / 4, -2], size: 3, opacity: 0.08 },
    { color: "#7000FF", pos: [0, 0, -3], size: 5, opacity: 0.05 },
  ], [viewport]);

  return (
    <>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.pos as [number, number, number]}>
          <planeGeometry args={[orb.size, orb.size]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={orb.opacity}
            depthWrite={false}
          />
        </mesh>
      ))}
    </>
  );
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]} // Limit DPR on mobile for better performance
      >
        <Particles />
        <GradientOrbs />
      </Canvas>
    </div>
  );
}
