'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// ─── Structural constants (1 unit = 1 ft) ─────────────────────────────────────
const POST_W = 0.28;          // ~3.4" square post
const POST_H = 9.5;           // post height
const BEAM_W = 0.28;          // beam cross-section width
const BEAM_H = 0.55;          // beam structural depth
const LOUVER_T = 0.075;       // louver blade thickness
const LOUVER_BLADE = 0.62;    // louver chord when flat (~7.4")
const BASE_H = 0.06;
const BASE_SIZE = 0.52;

export interface PergolaCanvasProps {
  width: number;
  depth: number;
  mountType: 'freestanding' | 'wall-mounted';
  frameColor: string;
  louverAngleDeg: number;
  showLED: boolean;
  showScreens: boolean;
  nightMode: boolean;
}

// ─── Frame material (reused across parts) ────────────────────────────────────
function FrameMat({ color }: { color: string }) {
  return <meshStandardMaterial color={color} metalness={0.55} roughness={0.28} envMapIntensity={1.2} />;
}

// ─── Animated louver group ────────────────────────────────────────────────────
function AnimatedLouverGroup({
  innerWidth,
  innerDepth,
  louverY,
  color,
  targetAngleDeg,
}: {
  innerWidth: number;
  innerDepth: number;
  louverY: number;
  color: string;
  targetAngleDeg: number;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const prevTarget = useRef(targetAngleDeg);
  const lastChangedAt = useRef(-999);

  const louverCount = Math.max(3, Math.round(innerDepth / LOUVER_BLADE));
  const louverSpacing = innerDepth / louverCount;

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const t = clock.getElapsedTime();

    // Detect slider interaction
    if (targetAngleDeg !== prevTarget.current) {
      prevTarget.current = targetAngleDeg;
      lastChangedAt.current = t;
    }

    const angle =
      t - lastChangedAt.current < 2.0
        ? (targetAngleDeg * Math.PI) / 180          // user-controlled
        : (Math.sin(t * 0.4) * 0.5 + 0.5) * (Math.PI / 2); // auto-oscillate 0–90°

    groupRef.current.children.forEach((child) => {
      (child as THREE.Mesh).rotation.x = angle;
    });
  });

  return (
    <group ref={groupRef} position={[0, louverY, 0]}>
      {Array.from({ length: louverCount }, (_, i) => {
        const z = -innerDepth / 2 + louverSpacing * (i + 0.5);
        return (
          <mesh key={i} castShadow position={[0, 0, z]}>
            <boxGeometry args={[innerWidth, LOUVER_T, LOUVER_BLADE]} />
            <meshStandardMaterial color={color} metalness={0.55} roughness={0.22} envMapIntensity={1.4} />
          </mesh>
        );
      })}
    </group>
  );
}


// ─── The full pergola geometry ────────────────────────────────────────────────
function PergolaModel({
  width,
  depth,
  mountType,
  frameColor,
  louverAngleDeg,
  showLED,
  showScreens,
}: PergolaCanvasProps) {
  const beamY = POST_H + BEAM_H / 2;
  const louverY = POST_H + BEAM_H + LOUVER_T / 2 + 0.01;

  const innerWidth = width - BEAM_W * 2 - 0.04;
  const innerDepth = depth - BEAM_W * 2;

  // Post corner positions
  const px = width / 2 - POST_W / 2;
  const pz = depth / 2 - POST_W / 2;
  const freestandingPosts: [number, number, number][] = [
    [-px, 0, pz],
    [px, 0, pz],
    [-px, 0, -pz],
    [px, 0, -pz],
  ];
  const wallPosts: [number, number, number][] = [
    [-px, 0, pz],
    [px, 0, pz],
  ];
  const postPositions = mountType === 'freestanding' ? freestandingPosts : wallPosts;

  return (
    <group>
      {/* ── Posts ── */}
      {postPositions.map(([x, , z], i) => (
        <group key={`post-${i}`} position={[x, 0, z]}>
          {/* Shaft */}
          <mesh castShadow position={[0, POST_H / 2, 0]}>
            <boxGeometry args={[POST_W, POST_H, POST_W]} />
            <FrameMat color={frameColor} />
          </mesh>
          {/* Base plate */}
          <mesh receiveShadow position={[0, BASE_H / 2, 0]}>
            <boxGeometry args={[BASE_SIZE, BASE_H, BASE_SIZE]} />
            <FrameMat color={frameColor} />
          </mesh>
          {/* Post cap */}
          <mesh position={[0, POST_H + 0.025, 0]}>
            <boxGeometry args={[POST_W + 0.05, 0.05, POST_W + 0.05]} />
            <FrameMat color={frameColor} />
          </mesh>
        </group>
      ))}

      {/* ── Wall bracket (wall-mounted) ── */}
      {mountType === 'wall-mounted' && (
        <mesh position={[0, beamY - 0.05, -depth / 2 + 0.04]}>
          <boxGeometry args={[width - 0.1, 0.3, 0.08]} />
          <FrameMat color={frameColor} />
        </mesh>
      )}

      {/* ── Side beams (run along Z / depth direction) ── */}
      {([-1, 1] as const).map((side) => (
        <mesh
          key={`sidebeam-${side}`}
          castShadow
          position={[side * (width / 2 - BEAM_W / 2), beamY, 0]}
        >
          <boxGeometry args={[BEAM_W, BEAM_H, depth]} />
          <FrameMat color={frameColor} />
        </mesh>
      ))}

      {/* ── End beams (run along X / width direction) ── */}
      {([-1, 1] as const).map((side) => (
        <mesh
          key={`endbeam-${side}`}
          castShadow
          position={[0, beamY, side * (depth / 2 - BEAM_W / 2)]}
        >
          <boxGeometry args={[width, BEAM_H, BEAM_W]} />
          <FrameMat color={frameColor} />
        </mesh>
      ))}

      {/* ── Louver blades (animated) ── */}
      <AnimatedLouverGroup
        innerWidth={innerWidth}
        innerDepth={innerDepth}
        louverY={louverY}
        color={frameColor}
        targetAngleDeg={louverAngleDeg}
      />

      {/* ── LED strips (inside face of side beams) ── */}
      {showLED &&
        ([-1, 1] as const).map((side) => (
          <group key={`led-${side}`}>
            <mesh
              position={[
                side * (width / 2 - BEAM_W * 0.5),
                POST_H + BEAM_H - 0.1,
                0,
              ]}
            >
              <boxGeometry args={[0.14, 0.1, depth - BEAM_W * 2 - 0.1]} />
              <meshStandardMaterial
                color="#FFF5C0"
                emissive="#FFE080"
                emissiveIntensity={6}
                roughness={0.3}
              />
            </mesh>
            <pointLight
              position={[side * (width / 2 - BEAM_W - 0.3), POST_H + BEAM_H - 0.2, 0]}
              intensity={8}
              distance={depth * 1.8}
              color="#FFE070"
              decay={2}
            />
          </group>
        ))}

      {/* ── Retractable screens (semi-transparent sides) ── */}
      {showScreens && (
        <>
          {/* Left */}
          <mesh position={[-width / 2 + BEAM_W + 0.01, POST_H / 2, 0]}>
            <boxGeometry args={[0.018, POST_H, depth - BEAM_W * 2]} />
            <meshStandardMaterial
              color="#C8D8E8"
              transparent
              opacity={0.22}
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Right */}
          <mesh position={[width / 2 - BEAM_W - 0.01, POST_H / 2, 0]}>
            <boxGeometry args={[0.018, POST_H, depth - BEAM_W * 2]} />
            <meshStandardMaterial
              color="#C8D8E8"
              transparent
              opacity={0.22}
              side={THREE.DoubleSide}
            />
          </mesh>
          {/* Front */}
          <mesh position={[0, POST_H / 2, depth / 2 - BEAM_W - 0.01]}>
            <boxGeometry args={[width - BEAM_W * 2, POST_H, 0.018]} />
            <meshStandardMaterial
              color="#C8D8E8"
              transparent
              opacity={0.22}
              side={THREE.DoubleSide}
            />
          </mesh>
        </>
      )}
    </group>
  );
}

// ─── Ground plane ─────────────────────────────────────────────────────────────
function Ground({ nightMode }: { nightMode: boolean }) {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[120, 120]} />
      <meshStandardMaterial
        color={nightMode ? '#1A1C22' : '#8A8070'}
        roughness={0.95}
        metalness={0.02}
      />
    </mesh>
  );
}

// ─── Exported Canvas wrapper ──────────────────────────────────────────────────
export function PergolaCanvas(props: PergolaCanvasProps) {
  const { width, depth, nightMode } = props;
  const camDist = Math.max(width, depth) * 1.4;

  return (
    <Canvas
      shadows
      camera={{
        position: [camDist, camDist * 0.5, camDist],
        fov: 44,
        near: 0.1,
        far: 800,
      }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background — night replaces the sky gradient */}
      {nightMode && <color attach="background" args={['#08090F']} />}

      {/* Sky — daytime only */}
      {!nightMode && <Sky sunPosition={[10, 18, 12]} turbidity={6} rayleigh={0.5} />}

      {/* Lighting — dim dramatically at night so LEDs dominate */}
      <ambientLight intensity={nightMode ? 0.06 : 0.6} />
      <directionalLight
        position={[10, 18, 12]}
        intensity={nightMode ? 0.12 : 2.8}
        color={nightMode ? '#c8d8f0' : '#fff5e0'}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={120}
        shadow-camera-left={-35}
        shadow-camera-right={35}
        shadow-camera-top={35}
        shadow-camera-bottom={-35}
      />
      <directionalLight position={[-10, 6, -12]} intensity={nightMode ? 0 : 0.7} color="#a8c8f0" />
      <directionalLight position={[0, -1, 0]} intensity={nightMode ? 0 : 0.25} color="#d4c090" />

      <PergolaModel {...props} />
      <Ground nightMode={nightMode} />

      <OrbitControls
        enableDamping
        dampingFactor={0.06}
        maxPolarAngle={Math.PI / 2 - 0.02}
        minDistance={8}
        maxDistance={120}
        target={[0, POST_H * 0.44, 0]}
        enablePan={false}
      />
    </Canvas>
  );
}
