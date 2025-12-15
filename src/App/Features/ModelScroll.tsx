import { useRef, Suspense } from 'react'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive'

import useMacbookStore from './store'
import Macbook from './Macbook'

const ModelScroll = () => {
  const groupRef = useRef<THREE.Group>(null)

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  const { texture, setTexture } = useMacbookStore()

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

      gsap
        .timeline({
          scrollTrigger: {
            trigger: '#f-canvas',
            start: 'top center',
            end: 'bottom  top',
            scrub: 1,
          },
        })
        .call(() => setTexture('/videos/feature-1.mp4'))
        .to('.box1', { opacity: 1, y: 0, delay: 1 })

        .call(() => setTexture('/videos/feature-2.mp4'))
        .to('.box2', { opacity: 1, y: 0 })

        .call(() => setTexture('/videos/feature-3.mp4'))
        .to('.box3', { opacity: 1, y: 0 })

        .call(() => setTexture('/videos/feature-4.mp4'))
        .to('.box4', { opacity: 1, y: 0 })

        .call(() => setTexture('/videos/feature-5.mp4'))
        .to('.box5', { opacity: 1, y: 0 })
    }
  })

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-2xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <Macbook
          scale={isMobile ? 0.05 : 0.08}
          position={[0, -1, 0]}
          texturePath={texture}
        />
      </Suspense>
    </group>
  )
}

export default ModelScroll
