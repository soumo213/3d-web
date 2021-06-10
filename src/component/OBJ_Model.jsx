import React, { Suspense, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls, Stars } from '@react-three/drei';
import duck from '../Models/meatboy/Super_meatboy_free.obj';

export default function OBJModel() {
    const Model = ({ modelPath }) => {
        const [obj, setObj] = useState();
        useMemo(() => new OBJLoader().load(modelPath, setObj), [modelPath]);
        return obj ? <primitive object={obj} /> : null;
    };
    return (
        <>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <OrbitControls />
                <Stars />
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} position={[300, 300, 400]} />
                <Suspense fallback={null}>
                    <mesh>
                        <Model modelPath={duck} />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    )
}
