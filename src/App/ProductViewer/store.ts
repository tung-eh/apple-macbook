import { create } from 'zustand'

export interface MacbookStore {
  color: string
  setColor: (color: string) => void
  scale: 'large' | 'small'
  setScale: (scale: 'large' | 'small') => void
}

const useMacbookStore = create<MacbookStore>((set) => ({
  color: '#2e2c2e',
  setColor: (color) => set({ color }),

  scale: 'large',
  setScale: (scale) => set({ scale }),

  reset: () => set({ color: '#2e2c2e', scale: 'large' }),
}))

export default useMacbookStore
