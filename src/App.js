import React, {
  useState,
  Suspense,
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo
} from "react";
import {
  OrbitControls,
  useTexture,
  Environment,
  useGLTF,
  meshBounds,
  Stars
} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import {
  VRCanvas,
  useXR,
  RayGrab,
  DefaultXRControllers
} from "@react-three/xr";
import {
  WebGLCubeRenderTarget,
  sRGBEncoding,
  Texture,
  TextureLoader,
  PMREMGenerator
} from "three";
import { RGBELoader, EXRLoader } from "three-stdlib";
import { useControls } from "leva";
import { Perf } from "r3f-perf";
import XRStats from "./components/XRStats";

import Grid from "./components/Grid";
//import Model from "./components";
// import Title from "./components/Title";

import "wipe.css";
import "./styles.css";

//let nextFrame = undefined;

const XR = () => {
  const { player, isPresenting } = useXR();

  useEffect(() => {
    if (isPresenting) {
      player.position.z += 1;
    } else {
      player.position.x = 0;
      player.position.y = 0;
      player.position.z = 0;
    }
  }, [player, isPresenting]);

  return null;
};

const Scene = () => {
  const box = useRef();
  const floor = useRef();

  const { gl, scene } = useThree();
  const [
    // envMap1,
    // envMap2,
    // envMap3,
    // envMap3_2,
    // envMap4,
    // envMap5,
    envMap20
  ] = useTexture([
    // "/gradient-test-1.jpeg",
    // "/gradient-test-2.jpeg",
    // "/gradient-test-3.jpeg",
    // "/gradient-test-3_v2.jpeg",
    // "/gradient-test-4.jpeg",
    // "/gradient-test-5.jpeg",
    "/gradient-test-20.min.jpg"
  ]);

  const {
    showFloor,
    bgMap,
    floorColor,
    floorRoughness,
    floorMetalness,
    floorSize,
    hdriUpload,
    showBackground,
    boxColor,
    boxRoughness,
    boxMetalness
  } = useControls({
    bgMap: {
      options: {
        twenty: envMap20
        // one: envMap1,
        // two: envMap2,
        // three: envMap3,
        // threev2: envMap3_2,
        // four: envMap4,
        // five: envMap5
      }
    },
    showFloor: true,
    showBackground: true,
    floorRoughness: { value: 0.5, min: 0, max: 1 },
    floorMetalness: { value: 0.5, min: 0, max: 1 },
    floorColor: "#151515",
    floorSize: { value: 8, min: 1, max: 100 },
    boxRoughness: { value: 0.5, min: 0, max: 1 },
    boxMetalness: { value: 0.5, min: 0, max: 1 },
    boxColor: "#151515",
    hdriUpload: { label: "Upload env", image: "" }
  });

  const [hdri, setHdri] = useState(null);

  // create Cube env map from Equirectangluar
  useLayoutEffect(() => {
    if (!showBackground) {
      scene.background = hdri;
    } else {
      console.log("set", bgMap);
      const rt = new WebGLCubeRenderTarget(bgMap.image.height);
      rt.fromEquirectangularTexture(gl, bgMap);
      rt.texture.encoding = sRGBEncoding; // fix rgb
      scene.background = rt.texture;
      console.log("done");
    }
  }, [gl, bgMap, scene, showBackground, hdri]);

  const pmremGenerator = useMemo(() => {
    const pmremGenerator = new PMREMGenerator(gl);
    pmremGenerator.compileEquirectangularShader();
    return pmremGenerator;
  }, [gl]);

  useEffect(() => {
    if (hdriUpload && pmremGenerator) {
      console.log("load texture...", pmremGenerator);

      //new RGBELoader().load(
      new EXRLoader().load(
        hdriUpload,
        (texture) => {
          console.log("loaded texture", texture);
          const tex = pmremGenerator.fromEquirectangular(texture).texture;
          setHdri(tex);
          scene.environment = tex;
          //texture.dispose();
          //pmremGenerator.dispose();
        },
        (e) => console.log("propgress", e),
        (e) => console.log("error", e)
      );
    }
  }, [gl, scene, hdriUpload, pmremGenerator]);

  // useLayoutEffect(() => {
  //   console.log("hdriUpload", hdriUpload);
  // }, [gl, hdriUpload, scene, showBackground]);

  const model1 = useGLTF("multi-app-toolbox.glb");
  const model2 = useGLTF("pluto-app.glb");
  const model3 = useGLTF("open-ecosystem.glb");
  const model4 = useGLTF("plutosphere-dark.glb");
  const model5 = useGLTF("plutosphere-light.glb");

  return (
    <>
      <mesh ref={box} position-y={0.51}>
        <boxBufferGeometry attach="geometry" args={[0.8, 1, 0.8]} />
        <meshStandardMaterial
          attach="material"
          metalness={boxMetalness}
          roughness={boxRoughness}
          color={boxColor}
        />
      </mesh>

      <RayGrab>
        <mesh
          raycast={meshBounds}
          geometry={model1.nodes.MULTI_APP_TOOLBOX.geometry}
          material={model1.materials.MULTI_APP_TOOLBOX}
          position={[-0.3, 1.1, 0.3]}
          scale={0.002}
        />
      </RayGrab>
      <RayGrab>
        <primitive object={model2.scene} position={[-0.1, 1.1, 0.3]} />
      </RayGrab>
      {/* <primitive object={model5.scene} position={[0, 1.1, 0]} /> */}
      <RayGrab>
        <primitive object={model3.scene} position={[0.1, 1.1, 0.3]} />
      </RayGrab>
      <RayGrab>
        <primitive object={model4.scene} position={[0.4, 1.1, 0.3]} />
      </RayGrab>

      {showFloor && (
        <mesh ref={floor} rotation={[-Math.PI * 0.5, 0, 0]}>
          <circleGeometry attach="geometry" args={[floorSize, 128]} />
          <meshStandardMaterial
            attach="material"
            color={floorColor}
            metalness={floorMetalness}
            roughness={floorRoughness}
          />
        </mesh>
      )}
    </>
  );
};

const WebGL = () => {
  const { fogColor, useFog, fogDensity } = useControls({
    fogColor: "#dfa3ff",
    useFog: true,
    fogDensity: 0.1
  });

  return (
    <VRCanvas
      dpr={[1, 2]}
      gl={{
        // toneMapping: NoToneMapping,
        antialias: true,
        alpha: false
      }}
      camera={{ position: [0, 1.7, 1] }}
    >
      {useFog && <fogExp2 attach="fog" density={fogDensity} color={fogColor} />}
      <Suspense fallback={"loading"}>
        <Scene />
        {/* <Model /> */}
        {/* <Grid /> */}
        <OrbitControls target={[0, 1, 0]} />
        {/* <Environment files={hdriUpload} background /> */}
        <Stars
          radius={0}
          depth={4}
          count={2000}
          factor={0.15}
          saturation={1}
          fade
        />
      </Suspense>
      {/* <axesHelper args={[20, 20, 20]} /> */}
      <XR />
      {/* <Stats /> */}
      {/* <Perf /> */}
      <DefaultXRControllers />
      <XRStats />
    </VRCanvas>
  );
};

export default function App() {
  return (
    <div className="App">
      {/* <Title /> */}
      <WebGL />
    </div>
  );
}
