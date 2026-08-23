"use client"

import React, { Suspense, useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import {
    useGLTF,
    useTexture,
    Stage,
    OrbitControls,
    PerspectiveCamera,
    Center,
    Float
} from "@react-three/drei"
import * as THREE from "three"

function Model({ url }) {
    const { scene } = useGLTF(url)
    const modelRef = useRef()

    // Load textures from the /textures folder
    const textures = useTexture({
        map: "/textures/Untitled_1.png",
        normalMap: "/textures/plane_DefaultMaterial_Normal_3.jpeg",
        roughnessMap: "/textures/Untitled_2@channels=G.png",
        aoMap: "/textures/internal_ground_ao_texture.jpeg",
    })

    // Apply textures to all meshes in the scene
    useEffect(() => {
        scene.traverse((obj) => {
            if (obj.isMesh) {
                // Create a new material to make sure we don't affect other instances if any
                // or just update parameters if it's already a Standard material
                obj.material.map = textures.map
                obj.material.normalMap = textures.normalMap
                obj.material.roughnessMap = textures.roughnessMap
                obj.material.aoMap = textures.aoMap

                // Fix texture orientation (standard for GLTF imports in Three.js)
                if (obj.material.map) obj.material.map.flipY = false
                if (obj.material.normalMap) obj.material.normalMap.flipY = false
                if (obj.material.roughnessMap) obj.material.roughnessMap.flipY = false
                if (obj.material.aoMap) obj.material.aoMap.flipY = false

                obj.material.needsUpdate = true
            }
        })
    }, [scene, textures])

    // Gentle rotation for the custom model
    useFrame((state) => {
        if (modelRef.current) {
            modelRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <primitive
                ref={modelRef}
                object={scene}
                scale={0.8}
                position={[0, 0, 0]}
            />
        </Float>
    )
}

function Loader() {
    return (
        <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#f2ad08" wireframe />
        </mesh>
    )
}

export default function HeroScene() {
    return (
        <div className="h-full w-full min-h-[400px]">
            <Canvas shadows dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={45} />

                {/* Environment and Stage for professional lighting */}
                <Suspense fallback={<Loader />}>
                    <Stage
                        intensity={0.5}
                        environment="city"
                        shadows={{ type: 'contact', opacity: 0.2, blur: 3 }}
                        adjustCamera={true}
                    >
                        <Center>
                            <Model url="/source/Untitled1.glb" />
                        </Center>
                    </Stage>
                </Suspense>

                {/* Manual lighting as fallback */}
                <ambientLight intensity={0.2} />

                {/* Interaction */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    minPolarAngle={Math.PI / 2.5}
                    maxPolarAngle={Math.PI / 1.5}
                />
            </Canvas>
        </div>
    )
}

// Preload the model and main textures for faster loading
useGLTF.preload("/source/Untitled1.glb")
useTexture.preload("/textures/Untitled_1.png")
