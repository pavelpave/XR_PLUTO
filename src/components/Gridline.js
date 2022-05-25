import React, { useState, useRef } from "react";
import { extend, useThree } from "@react-three/fiber";
import * as meshline from "three.meshline";
import { a, useSpring } from "@react-spring/three";
import { DoubleSide } from "three";
import { easeExpInOut } from "d3-ease";

extend(meshline);

const start = 0.5;
const end = 0;

const Gridline = ({
  points,
  shouldAnimate = false,
  thickness,
  delay = 0,
  duration,
  reverse = false
}) => {
  const [shouldDispose, setShouldDispose] = useState(false);
  const line = useRef();
  const material = useRef();
  const {
    viewport: { factor }
  } = useThree();

  useSpring({
    dashOffset: shouldAnimate
      ? !reverse
        ? -start
        : end
      : !reverse
      ? end
      : start,
    delay: delay * 100,
    config: {
      duration: duration * 1000,
      easing: easeExpInOut
    },
    onChange: (spring) => {
      material.current.uniforms.dashOffset.value = spring.value.dashOffset;
    },
    onStart: () => {
      material.current.opacity = 1;
    },
    onRest: () => {
      reverse && setShouldDispose(true);
    }
  });

  if (shouldDispose) return null;
  return (
    <a.mesh ref={line}>
      <meshLine attach="geometry" points={points} />
      <meshLineMaterial
        attach="material"
        lineWidth={thickness / factor}
        color="#fff"
        transparent
        ref={material}
        side={DoubleSide}
        dashArray={1}
        dashRatio={0.5}
        dashOffset={!reverse ? end : -start}
        opacity={!reverse ? 0 : 1}
        fog
      />
    </a.mesh>
  );
};

export default Gridline;
