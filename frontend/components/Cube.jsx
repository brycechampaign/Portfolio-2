import React, { useRef, useState, Suspense } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import faceInnerReference from "../textures/face_inner.jpeg";
import faceLeftReference from "../textures/face_left.jpeg";
import faceRightReference from "../textures/face_right.jpg";
import faceTopReference from "../textures/face_top.jpg";
import faceBackReference from "../textures/face_back.jpg";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraControls = () => {
  // TODO: Disable zoom and panning functionality. Users should only be able to rotate.
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());

  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
    />
  );
};

const Cube = ({ isClickingDown }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    return (ref.current.rotation.y += isClickingDown ? 0 : 0.005);
  });

  const faceInner = useLoader(TextureLoader, faceInnerReference);
  const faceLeft = useLoader(TextureLoader, faceLeftReference);
  const faceTop = useLoader(TextureLoader, faceTopReference);
  const faceRight = useLoader(TextureLoader, faceRightReference);
  const faceBack = useLoader(TextureLoader, faceBackReference);

  return (
    <mesh ref={ref} scale={3}>
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

const CubeCanvas = () => {
  const [isClickingDown, setIsClickingDown] = useState(false);

  return (
    <div
      className="cube-scene"
      onPointerDown={() => setIsClickingDown(true)}
      onPointerUp={() => setIsClickingDown(false)}
    >
      <Canvas>
        <CameraControls />
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <Cube isClickingDown={isClickingDown} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CubeCanvas;
