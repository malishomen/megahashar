import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

const CyberHeartGeometry: React.FC = () => {
  const heartRef = useRef<THREE.Mesh>(null);
  const axisRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  
  // Загрузка текстуры сердца с fallback
  let heartTexture: THREE.Texture | null = null;
  try {
    heartTexture = useLoader(THREE.TextureLoader, '/megahashar/assets/megaheart.png');
  } catch (error) {
    // Fallback: текстура не загрузилась
    console.warn('Heart texture not loaded, using fallback');
  }
  
  // Создаем частицы для орбит
  const particles = useMemo(() => {
    const particlesData: Array<{ angle: number; radius: number; speed: number }> = [];
    for (let i = 0; i < 12; i++) {
      particlesData.push({
        angle: (i * Math.PI * 2) / 12,
        radius: 2.5 + (i % 3) * 1,
        speed: 0.3 + (i % 3) * 0.1
      });
    }
    return particlesData;
  }, []);
  
  const particleRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const heartBeatCycle = 1.3; // цикл сердцебиения
    const beatPhase = (time % heartBeatCycle) / heartBeatCycle;
    
    // Пульсация сердца (двойной пульс как настоящее сердце)
    let heartScale = 1;
    let heartEmissive = 0.4;
    
    if (beatPhase < 0.14) {
      // Первый удар
      heartScale = 1 + Math.sin(beatPhase / 0.14 * Math.PI) * 0.08;
      heartEmissive = 0.4 + Math.sin(beatPhase / 0.14 * Math.PI) * 0.4;
    } else if (beatPhase > 0.28 && beatPhase < 0.42) {
      // Второй удар
      const localPhase = (beatPhase - 0.28) / 0.14;
      heartScale = 1 + Math.sin(localPhase * Math.PI) * 0.06;
      heartEmissive = 0.4 + Math.sin(localPhase * Math.PI) * 0.3;
    }
    
    if (heartRef.current) {
      heartRef.current.scale.setScalar(heartScale);
      const material = heartRef.current.material as THREE.MeshStandardMaterial;
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = heartEmissive;
      }
    }
    
    // Пульсация энергетической оси
    if (axisRef.current) {
      const material = axisRef.current.material as THREE.MeshStandardMaterial;
      if (material.emissiveIntensity !== undefined) {
        material.emissiveIntensity = 0.3 + heartEmissive * 0.5;
      }
      material.opacity = 0.5 + heartEmissive * 0.3;
    }
    
    // Вращение орбит
    if (ring1Ref.current) {
      ring1Ref.current.rotation.y = time * 0.3;
      const material = ring1Ref.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.6 + heartEmissive * 0.2;
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * 0.2;
      const material = ring2Ref.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.4 + heartEmissive * 0.15;
    }
    
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.25;
      const material = ring3Ref.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.3 + heartEmissive * 0.1;
    }
    
    // Движение частиц по орбитам
    particleRefs.current.forEach((particle, i) => {
      if (particle && particles[i]) {
        const data = particles[i];
        const angle = data.angle + time * data.speed;
        particle.position.x = Math.cos(angle) * data.radius;
        particle.position.z = Math.sin(angle) * data.radius;
        
        // Пульсация яркости частиц
        const material = particle.material as THREE.MeshBasicMaterial;
        material.opacity = 0.7 + heartEmissive * 0.3;
      }
    });
  });

  return (
    <group>
      {/* Центральная энергетическая ось */}
      <mesh ref={axisRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 6, 16]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Кибер-сердце */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
        <mesh ref={heartRef} position={[0, 0, 0]}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial
            map={heartTexture}
            color="#ff4444"
            emissive="#dc2626"
            emissiveIntensity={0.4}
            transparent
            opacity={heartTexture ? 1 : 0}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Fallback: если текстура не загрузилась, показываем красную сферу */}
        {!heartTexture && (
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial
              color="#dc2626"
              emissive="#dc2626"
              emissiveIntensity={0.6}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        )}
      </Float>

      {/* Орбиты */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.5, 0.06, 16, 100]} />
        <meshBasicMaterial color="#00bcd4" transparent opacity={0.6} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.05, 16, 100]} />
        <meshBasicMaterial color="#00838f" transparent opacity={0.4} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[4.5, 0.04, 16, 100]} />
        <meshBasicMaterial color="#006064" transparent opacity={0.3} />
      </mesh>

      {/* Энергетические частицы на орбитах */}
      {particles.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) particleRefs.current[i] = el;
          }}
          position={[0, 0, 0]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color="#00bcd4"
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
};

const ThreeScene: React.FC = () => {
  return (
    <div id="three-scene">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#0a192f']} />
        
        {/* Освещение для кибер-сердца */}
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#dc2626" />
        <pointLight position={[-5, -5, 5]} intensity={0.8} color="#00bcd4" />
        <pointLight position={[0, 0, -5]} intensity={0.6} color="#ff6b6b" />
        
        <Suspense fallback={null}>
          <CyberHeartGeometry />
        </Suspense>
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
        
        <fog attach="fog" args={['#0a192f', 10, 25]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;

