import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';

export default function StacyCharacter() {
  const group = useRef<THREE.Group>(null);
  const soundRef = useRef<THREE.PositionalAudio>(null);

  const { camera } = useThree(); // Needed for audio listener
  const listener = useRef<THREE.AudioListener>(new THREE.AudioListener());
  const audioLoader = useRef(new THREE.AudioLoader());
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

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
    camera.add(listener.current);

    // Create and load the positional audio
    const sound = new THREE.PositionalAudio(listener.current);
    soundRef.current = sound;

    audioLoader.current.load(
      '/audio.mp3',  // Path to the audio file
      (buffer) => {
        console.log('Audio loaded successfully');
        sound.setBuffer(buffer);
        sound.setRefDistance(10);  // Adjust as necessary
        sound.setVolume(1);
      },
      undefined,
      (error) => {
        console.error('Error loading audio: ', error);
      }
    );

    if (group.current) {
      group.current.add(sound);
    }
    const handleClick = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      raycaster.setFromCamera(mouse, camera);
    
      const intersects = raycaster.intersectObject(group.current!, true); // `true` for recursive check
    
      if (intersects.length > 0) {
        console.log('Avatar clicked!');
        const sound = soundRef.current;
    
        if (sound && sound.buffer && !sound.isPlaying) {
          sound.play();
          console.log('Audio is playing');
        } else if (sound?.isPlaying) {
          sound.stop();
          console.log('Audio stopped');
        }
      }
    };
    

    // Add the click event listener
    window.addEventListener('click', handleClick);

    // Material & bone setup
    scene.traverse((obj) => {
      if ((obj as THREE.SkinnedMesh).isSkinnedMesh) {
        const mesh = obj as THREE.SkinnedMesh;
        const material = new THREE.MeshStandardMaterial({ map: texture });
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

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [scene, texture, actions, camera]);

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
