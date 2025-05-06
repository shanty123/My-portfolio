import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';

export default function StacyCharacter() {
  const group = useRef<THREE.Group>(null);

  const { scene, animations } = useGLTF(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy_lightweight.glb'
  );

  const texture = useTexture(
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1376484/stacy.jpg'
  );
  texture.flipY = false;

  const { actions } = useAnimations(animations, group);
  const neck = useRef<THREE.Bone | null>(null);
  const spine = useRef<THREE.Bone | null>(null);

  useEffect(() => {
    scene.traverse((obj) => {
      if ((obj as THREE.SkinnedMesh).isSkinnedMesh) {
        const mesh = obj as THREE.SkinnedMesh;
        const material = new THREE.MeshStandardMaterial({
          map: texture,
        
        });
        mesh.material = material;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }

      if (obj.type === 'Bone') {
        if (obj.name === 'mixamorigNeck') neck.current = obj as THREE.Bone;
        if (obj.name === 'mixamorigSpine') spine.current = obj as THREE.Bone;
      }
    });

    actions.idle?.play();
  }, [scene, texture, actions]);

  useFrame(({ pointer }) => {
    const maxRotation = 40;

    if (neck.current && spine.current) {
      neck.current.rotation.y = THREE.MathUtils.degToRad(pointer.x * maxRotation);
      neck.current.rotation.x = THREE.MathUtils.degToRad(-pointer.y * maxRotation * 0.5);
      spine.current.rotation.y = THREE.MathUtils.degToRad(pointer.x * maxRotation * 0.25);
      spine.current.rotation.x = THREE.MathUtils.degToRad(-pointer.y * maxRotation * 0.15);
    }
  });

  return <primitive ref={group} object={scene} scale={7} position={[-10, -11, 0]} />;
}
