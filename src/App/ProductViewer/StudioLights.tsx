import { Environment, Lightformer } from '@react-three/drei'

const StudioLights = () => {
  return (
    <group>
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            scale={10}
            position={[-10, 5, -5]}
          />
        </group>
      </Environment>
    </group>
  )
}

export default StudioLights
