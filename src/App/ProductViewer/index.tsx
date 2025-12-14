import clsx from 'clsx'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import useMacbookStore from './store'
import StudioLights from './StudioLights'
import Macbook14 from './Macbook14'

const ProductViewer = () => {
  const { color, setColor, scale, setScale } = useMacbookStore()

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor('#adb5bd')}
              className={clsx(
                'bg-neutral-300',
                color === '#adb5bd' && 'active'
              )}
            />
            <div
              onClick={() => setColor('#2e2c2e')}
              className={clsx(
                'bg-neutral-900',
                color === '#2e2c2e' && 'active'
              )}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale('small')}
              className={clsx(
                scale === 'small'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale('large')}
              className={clsx(
                scale === 'large'
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white'
              )}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <Macbook14 scale={scale === 'large' ? 0.08 : 0.06} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  )
}

export default ProductViewer
