"use client";
/* eslint-disable react/no-unknown-property */
import React, {
  forwardRef,
  useMemo,
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
} from "react";
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";
import { IUniform } from "three";

interface UniformValue<T = number | Color> {
  value: T;
}

interface SilkUniforms {
  uSpeed: UniformValue<number>;
  uScale: UniformValue<number>;
  uNoiseIntensity: UniformValue<number>;
  uColor: UniformValue<Color>;
  uRotation: UniformValue<number>;
  uTime: UniformValue<number>;
  [uniform: string]: IUniform;
}

const vertexShader = `...`; // оставляем как у тебя
const fragmentShader = `...`; // оставляем как у тебя

interface SilkPlaneProps {
  uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
  { uniforms },
  ref
) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>;
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & {
        uniforms: SilkUniforms;
      };
      material.uniforms.uTime.value += 0.1 * delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
});
SilkPlane.displayName = "SilkPlane";

export interface SilkProps {
  speed?: number;
  scale?: number;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk: React.FC<SilkProps> = ({
  speed = 5,
  scale = 1,
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const [silkColor, setSilkColor] = useState("#f5e8bf");

  // читаем CSS-переменную только на клиенте
  useEffect(() => {
    const readColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--silk-color")
        .trim();
      setSilkColor(color || "#f5e8bf");
    };

    readColor();

    // следим за сменой класса .dark
    const observer = new MutationObserver(readColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const uniforms: SilkUniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(silkColor) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [speed, scale, noiseIntensity, rotation, silkColor]
  );

  const ref = useRef<Mesh>(null);

  return (
    <Canvas>
      <SilkPlane ref={ref} uniforms={uniforms} />
    </Canvas>
  );
};

export default Silk;