import React, { useEffect, useState, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const model = useGLTF("/plutosphere-low.glb");

  return (
    <group position={[0, 1.17, 0]} scale={0.07}>
      <primitive object={model.scene} dispose={null} />
    </group>
  );
};

export default Model;
