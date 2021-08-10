import { useState, useEffect } from 'react'

const createEmitter = () => {
    const subscriptions = new Map()

    return {
        emit: (v) => subscriptions.forEach(fn => fn(v)),
        subscribe: (fn) => {
            const key = Symbol()
            subscriptions.set(key, fn)

            return () => subscriptions.delete(key)
        }
    }
}

const createStore = (init) => {
    const emitter = createEmitter()

    let store = null
    const get = () => store
    const set = op => (
        store = op(store),
        emitter.emit(store)
    )

    store = init(get, set)

    const useStore = () => {
        const [localStore, setLocalStore] = useState(get())

        useEffect(() => emitter.subscribe(setLocalStore), [])

        return localStore
    }

    return useStore
}

export default createStore