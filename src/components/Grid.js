import React, { useEffect, useMemo, useState } from "react";
import Gridline from "./Gridline";
import { Vector3 } from "three";
import { useThree } from "@react-three/fiber";

import { verticals, horizontals, sides, floors } from "../config/grid";

const setDelays = (arr) => [...arr.keys()].sort((a, b) => 0.5 - Math.random());

const duration = 2;
const thickness = 0.3;

const verticalDelays = setDelays(verticals);
const verticalOffset = 0;
const horizontalDelays = setDelays(horizontals);
const horizontalOffset = verticals.length - 1;
const sideDelays = setDelays(sides);
const sideOffset = horizontalOffset + horizontals.length - 1 + duration;
const floorDelays = setDelays(floors);
const floorOffset = sideOffset + sides.length - 1;

const Grid = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [verticalVectors, setVerticalVectors] = useState([]);
  const [horizontalVectors, setHorizontalVectors] = useState([]);
  const [sideVectors, setSideVectors] = useState([]);
  const [floorVectors, setFloorVectors] = useState([]);
  const {
    viewport: { factor }
  } = useThree();
  const c = (thickness * 0.5) / factor + 0.01; //avoid z fighting
  const b = 1; // basis (if box other than 1,1,1)

  useEffect(() => {
    setTimeout(() => {
      setShouldAnimate(true);
    }, 500);
  }, []);

  useMemo(() => {
    setVerticalVectors(
      verticals.map(({ start, end }) => {
        return [
          new Vector3(start.x * b, start.y * b + c, start.z * b + c),
          new Vector3(end.x * b, end.y * b + c, end.z * b + c)
        ];
      })
    );

    setHorizontalVectors(
      horizontals.map(({ start, end }) => {
        return [
          new Vector3(start.x * b, start.y * b + c, start.z * b),
          new Vector3(end.x * b, end.y * b + c, end.z * b)
        ];
      })
    );

    setSideVectors(
      sides.map(({ start, end }) => {
        return [
          new Vector3(start.x * b, start.y * b + c, start.z * b),
          new Vector3(end.x * b, end.y * b + c, end.z * b)
        ];
      })
    );

    setFloorVectors(
      floors.map(({ start, end }) => {
        return [
          new Vector3(start.x * b, start.y * b + c, start.z * b),
          new Vector3(end.x * b, end.y * b + c, end.z * b)
        ];
      })
    );
  }, [c]);

  return (
    <>
      {/* Vertical grid 2d basis*/}
      {verticalVectors.length &&
        verticalVectors.map((_, i) => {
          return (
            <Gridline
              key={`vertical${i}`}
              thickness={thickness}
              points={verticalVectors[i]}
              shouldAnimate={shouldAnimate}
              duration={duration}
              delay={verticalDelays[i] + verticalOffset}
              reverse
            />
          );
        })}
      {/* Main horizontal grid */}
      {horizontalVectors.length &&
        horizontalVectors.map((_, i) => {
          return (
            <Gridline
              key={`horizontal${i}`}
              thickness={thickness}
              points={horizontalVectors[i]}
              shouldAnimate={shouldAnimate}
              duration={duration}
              delay={horizontalDelays[i] + horizontalOffset}
            />
          );
        })}
      {/* Side box grid */}
      {sideVectors.length &&
        sideVectors.map((_, i) => {
          return (
            <Gridline
              key={`side${i}`}
              thickness={thickness}
              points={sideVectors[i]}
              shouldAnimate={shouldAnimate}
              duration={duration}
              delay={sideDelays[i] + sideOffset}
            />
          );
        })}
      {/* Flor grid */}
      {floorVectors.length &&
        floorVectors.map((_, i) => {
          return (
            <Gridline
              key={`floor${i}`}
              thickness={thickness}
              points={floorVectors[i]}
              shouldAnimate={shouldAnimate}
              duration={duration}
              delay={floorDelays[i] + floorOffset}
            />
          );
        })}
    </>
  );
};

export default Grid;
