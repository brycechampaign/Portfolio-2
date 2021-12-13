import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import faceReference from "../textures/face.jpg";

const Cube = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX

  const face_1 = useLoader(TextureLoader, faceReference);

  return (
    <mesh {...props} ref={ref} scale={3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={face_1} args={[1, 1, 1]} />
    </mesh>
  );
};

export default () => (
  <div className="cube-scene">
    <Canvas>
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <Cube />
      </Suspense>
    </Canvas>
  </div>
);
