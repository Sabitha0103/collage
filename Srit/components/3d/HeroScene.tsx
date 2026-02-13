import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const NetworkGraph = () => {
    // Generate random points on a sphere surface for a "Global Network" look
    const count = 1000; // More professional density
    const [positions, connections] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const conn = [];
        const spread = 4; // Spread of the network

        for (let i = 0; i < count; i++) {
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            // Professional looking structure: a sphere + surrounding cloud
            const r = 3 + Math.random() * 2;
            const x = r * Math.sin(theta) * Math.cos(phi);
            const y = r * Math.sin(theta) * Math.sin(phi);
            const z = r * Math.cos(theta);

            pos[i * 3] = x;
            pos[i * 3 + 1] = y;
            pos[i * 3 + 2] = z;
        }
        return [pos, conn];
    }, [count]);

    const ref = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const { clock, mouse } = state;
        const t = clock.getElapsedTime();
        // Constant smooth rotation
        ref.current.rotation.y = t * 0.05;
        ref.current.rotation.x = Math.sin(t * 0.1) * 0.1;

        // Subtle mouse influence
        ref.current.rotation.y += mouse.x * 0.001;
        ref.current.rotation.x -= mouse.y * 0.001;
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#f97316"
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
            {/* Add a central solid geometry to anchor the scene visually */}
            <mesh scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#f97316"
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </mesh>
            {/* Lines connecting some points for 'network' feel - simplified as a secondary wireframe mesh */}
            <mesh scale={3.5} rotation={[0.5, 0.5, 0]}>
                <icosahedronGeometry args={[1, 2]} />
                <meshBasicMaterial
                    color="#003366"
                    wireframe
                    transparent
                    opacity={0.05}
                />
            </mesh>
        </group>
    )
}

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 bg-white">
            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />

                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.2}>
                    <NetworkGraph />
                </Float>

                {/* Soft fill light */}
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#f97316" />
                <spotLight position={[-10, 0, 10]} angle={0.3} penumbra={1} intensity={1} color="#0f172a" />

            </Canvas>
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
        </div>
    );
};

export default HeroScene;
