import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls, Stars } from '@react-three/drei';
import duck from '../Models/gladiador.glb';

function Duck() {
    const gltf = useLoader(GLTFLoader, duck)
    return <primitive object={gltf.scene} position={[0, 0, 0]} />
}


export default function GLDModel() {
    return (
        <>
            <Canvas>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} position={[300, 300, 400]} />
                <Suspense fallback={null}>
                    <mesh>
                        <Duck />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    )
}