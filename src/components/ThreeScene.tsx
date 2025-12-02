import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const ThreeScene: React.FC = () => {
  return (
    <div id="three-scene">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#0a192f']} />
        
        <ambientLight intensity={0.2} />
        
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Suspense>
        
        <fog attach="fog" args={['#0a192f', 10, 25]} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
