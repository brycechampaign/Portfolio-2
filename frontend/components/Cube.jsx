import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import faceInnerReference from "../textures/face_inner.jpeg";
import faceLeftReference from "../textures/face_left.jpeg";
import faceRightReference from "../textures/face_right.jpg";
import faceTopReference from "../textures/face_top.jpg";
import faceBackReference from "../textures/face_back.jpg";

const Cube = (props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));

  const faceInner = useLoader(TextureLoader, faceInnerReference);
  const faceLeft = useLoader(TextureLoader, faceLeftReference);
  const faceTop = useLoader(TextureLoader, faceTopReference);
  const faceRight = useLoader(TextureLoader, faceRightReference);
  const faceBack = useLoader(TextureLoader, faceBackReference);

  return (
    <mesh {...props} ref={ref} scale={3}>
      <boxGeometry args={[1, 1, 1]} />

      <meshStandardMaterial attachArray="material" map={faceRight} />
      <meshStandardMaterial attachArray="material" map={faceLeft} />
      <meshStandardMaterial attachArray="material" map={faceTop} />

      <meshStandardMaterial attachArray="material" color={"red"} />
      <meshStandardMaterial attachArray="material" map={faceInner} />
      <meshStandardMaterial attachArray="material" map={faceBack} />
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
