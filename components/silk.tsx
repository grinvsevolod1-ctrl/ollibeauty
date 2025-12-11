"use client"
/* eslint-disable react/no-unknown-property */
import React, {
  forwardRef,
  useMemo,
  useRef,
  useLayoutEffect,
  useEffect,
  useState,
} from "react"
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber"
import { Color, Mesh, ShaderMaterial } from "three"
import { IUniform } from "three"

interface UniformValue<T = number | Color> {
  value: T
}

interface SilkUniforms {
  uSpeed: UniformValue<number>
  uScale: UniformValue<number>
  uNoiseIntensity: UniformValue<number>
  uColor: UniformValue<Color>
  uRotation: UniformValue<number>
  uTime: UniformValue<number>
  [uniform: string]: IUniform
}

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
varying vec2 vUv;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2 rot = mat2(c, -s, s, c);
  return rot * uv;
}

float noise(vec2 texCoord, float t) {
  return 0.5 + 0.5 * sin(texCoord.x * 10.0 + texCoord.y * 10.0 + t);
}

void main() {
  float rnd = noise(vUv, uTime);
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  vec2 tex = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`

const SilkPlane = forwardRef<Mesh, { uniforms: SilkUniforms }>(function SilkPlane({ uniforms }, ref) {
  const { viewport } = useThree()

  useLayoutEffect(() => {
    const mesh = ref as React.MutableRefObject<Mesh | null>
    if (mesh.current) {
      mesh.current.scale.set(viewport.width, viewport.height, 1)
    }
  }, [ref, viewport])

  useFrame((_state: RootState, delta: number) => {
    const mesh = ref as React.MutableRefObject<Mesh | null>
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial & { uniforms: SilkUniforms }
      // скорость теперь управляется через uSpeed
      material.uniforms.uTime.value += delta * uniforms.uSpeed.value
    }
  })

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
})
SilkPlane.displayName = "SilkPlane"

export const Silk: React.FC<{
  speed?: number
  scale?: number
  noiseIntensity?: number
  rotation?: number
}> = ({
  speed = 5,
  scale = 1,
  noiseIntensity = 1.5,
  rotation = 0,
}) => {
  const [silkColor, setSilkColor] = useState("#f5e8bf")

  useEffect(() => {
    const readColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue("--silk-color")
        .trim()
      setSilkColor(color || "#f5e8bf")
    }

    readColor()

    const observer = new MutationObserver(readColor)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const uniforms: SilkUniforms = useMemo(() => ({
    uSpeed: { value: speed },
    uScale: { value: scale },
    uNoiseIntensity: { value: noiseIntensity },
    uColor: { value: new Color(silkColor) },
    uRotation: { value: rotation },
    uTime: { value: 0 },
  }), [speed, scale, noiseIntensity, rotation, silkColor])

  const ref = useRef<Mesh>(null)

  return (
    <Canvas className="absolute inset-0">
      <SilkPlane ref={ref} uniforms={uniforms} />
    </Canvas>
  )
}

export default Silk
