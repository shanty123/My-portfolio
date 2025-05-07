import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Character from '../components/Character';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw', // Ensures the full width is used
        background: 'linear-gradient(135deg, #7da43e, #a7e64c)', // Yellow and Ash gradient
        animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
        position: 'relative',
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0, 30], fov: 50 }}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.3} />
        <hemisphereLight intensity={0.5} />
        <directionalLight castShadow position={[5, 10, 5]} intensity={1} />
        <Character />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
