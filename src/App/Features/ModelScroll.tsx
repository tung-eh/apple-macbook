import { useRef, Suspense } from 'react'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

import Macbook from './Macbook'

const ModelScroll = () => {
  const groupRef = useRef<THREE.Group>(null)

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '#f-canvas',
          start: 'top top',
          end: 'bottom  top',
          scrub: 1,
          pin: true,
        },
      })
    }
  })

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <Macbook
          scale={isMobile ? 0.05 : 0.08}
          position={[0, -1, 0]}
          texturePath="/videos/feature-1.mp4"
        />
      </Suspense>
    </group>
  )
}

export default ModelScroll
