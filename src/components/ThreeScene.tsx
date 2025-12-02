import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const NexusGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    }
    
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = state.clock.elapsedTime * 0.4;
    }
  });

  return (
    <group>
      {/* Центральное ядро */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshStandardMaterial
            color="#ffd700"
            emissive="#ffd700"
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Внутреннее кольцо */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.1, 16, 100]} />
        <meshBasicMaterial color="#00bcd4" transparent opacity={0.8} />
      </mesh>

      {/* Среднее кольцо */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.08, 16, 100]} />
        <meshBasicMaterial color="#00838f" transparent opacity={0.6} />
      </mesh>

      {/* Внешнее кольцо */}
      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[4.5, 0.06, 16, 100]} />
        <meshBasicMaterial color="#006064" transparent opacity={0.4} />
      </mesh>

      {/* Соединительные линии */}
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6;
        return (
          <mesh key={i} rotation={[0, angle, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 5, 8]} />
            <meshBasicMaterial color="#00bcd4" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div id="three-scene">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#0a192f']} />
        
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00bcd4" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffd700" />
        
        <Suspense fallback={null}>
          <NexusGeometry />
        </Suspense>
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        
        <fog attach="fog" args={['#0a192f', 10, 25]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

