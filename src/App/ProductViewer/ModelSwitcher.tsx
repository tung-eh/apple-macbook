import { useRef } from 'react'
import * as THREE from 'three'
import { PresentationControls } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'

import useMacbookStore from './store'
import Macbook14 from './Macbook14'
import Macbook16 from './Macbook16'

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material.transparent = true
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION })
    }
  })
}

const moveGroup = (group: THREE.Group | null, x: number) => {
  if (!group) return

  gsap.to(group.position, { x, duration: ANIMATION_DURATION })
}

const controlsConfig = {
  snap: true,
  speed: 2,
  zoom: 1,
  azimuth: [-Infinity, Infinity] as [number, number],
  config: { mass: 1, tension: 0, friction: 26 },
}

const ModelSwitcher = () => {
  const { color, scale } = useMacbookStore()

  const smallMacbookRef = useRef<THREE.Group>(null)
  const largeMacbookRef = useRef<THREE.Group>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const scaleMap = isMobile
    ? { large: 0.05, small: 0.03 }
    : { large: 0.08, small: 0.06 }

  useGSAP(() => {
    if (scale === 'large') {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE)
      moveGroup(largeMacbookRef.current, 0)

      fadeMeshes(smallMacbookRef.current, 0)
      fadeMeshes(largeMacbookRef.current, 1)
    } else {
      moveGroup(smallMacbookRef.current, 0)
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE)

      fadeMeshes(smallMacbookRef.current, 1)
      fadeMeshes(largeMacbookRef.current, 0)
    }
  }, [scale])

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <Macbook16 color={color} scale={scaleMap.large} />
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <Macbook14 color={color} scale={scaleMap.small} />
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher
