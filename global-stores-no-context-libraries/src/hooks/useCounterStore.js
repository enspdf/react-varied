import createStore from "../lib/store"

const useCounterStore = createStore((get, set) => ({
    bears: 0,
    increment: () => set(store => ({ ...store, bears: store.bears + 1 })),
    decrement: () => set(store => ({ ...store, bears: store.bears - 1 })),
    reset: () => set((store) => ({ ...store, bears: 0 }))
}))

export default useCounterStore