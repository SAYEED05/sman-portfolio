"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Box from "../Box";
import { OrbitControls } from "@react-three/drei";
import ReusableText from "../Text";
const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <ReusableText
        scale={[5, 5, 5]}
        textPosition={[0, 1, -5]}
        color="white"
        anchorX="center"
        anchorY="middle"
        content="SMAN"
      />
      <Box position={[0, 0, -2]} boxArgs={[1.25, 1.25, 1.25]} />
      <ReusableText
        scale={[1, 1, 1]}
        color="#10afc1"
        anchorX="center"
        anchorY="middle"
        content="MOTION"
      />
      <ReusableText
        scale={[1, 1, 1]}
        textPosition={[0, -1, 0]}
        color="#10afc1"
        anchorX="center"
        anchorY="middle"
        content="DESIGNER"
      />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Scene;
