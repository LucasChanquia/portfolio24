import { create } from 'zustand'

type Store = {
    activeLink: string
    setActiveLink: (input:string) => void
}

export const useStore = create<Store>((set) => ({
    activeLink: "home",

    setActiveLink: (selection: string) => set((state: any) => ({...state, activeLink: selection}))
}))