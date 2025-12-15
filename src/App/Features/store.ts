import { create } from 'zustand'

export interface MacbookStore {
  texture: string
  setTexture: (texture: string) => void
}

const useMacbookStore = create<MacbookStore>((set) => ({
  texture: '/videos/feature-1.mp4',
  setTexture: (texture) => set({ texture }),

  reset: () => set({ texture: '/videos/feature-1.mp4' }),
}))

export default useMacbookStore
