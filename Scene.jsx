/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/realistic_women/scene.gltf 
Author: Michal (https://sketchfab.com/Michal_K)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/realistic-women-b1044722512546e9b3e49c0ec10f0d18
Title: Realistic Women
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
