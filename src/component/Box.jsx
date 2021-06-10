import React from 'react';
import { Canvas, } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';


function Shape() {

    return (
        <mesh>
            <boxBufferGeometry attach="geometry" />
            <meshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

export default function Box() {
    return (
        <Canvas>
            <OrbitControls />
            <Stars />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Shape />
        </Canvas>
    )
}