import { PresentationControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

import type { MacbookStore } from './store'
import Macbook14 from './Macbook14'

const controlsConfig = {
  snap: true,
}

const ModelSwitcher = ({ scale }: { scale: MacbookStore['scale'] }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const scaleMap = isMobile
    ? { large: 0.05, small: 0.03 }
    : { large: 0.08, small: 0.06 }

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group>
          <Macbook14 scale={scaleMap[scale]} />
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher
