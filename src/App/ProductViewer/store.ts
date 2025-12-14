import { create } from 'zustand'

interface MacbookStore {
  color: string
  setColor: (color: string) => void
  scale: 'large' | 'small'
  setScale: (scale: 'large' | 'small') => void
  texture: string
  setTexture: (texture: string) => void
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 'large',
  setScale: (scale) => set({ scale }),

  texture: '/videos/feature-1.mp4',
  setTexture: (texture) => set({ texture }),

  reset: () =>
    set({ color: '#2e2c2e', scale: 'large', texture: '/videos/feature-1.mp4' }),
}))

export default useMacbookStore
