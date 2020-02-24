import configureStore from './configureStore'

const { store, persistor } = configureStore()

export type IStore = typeof store

export { store, persistor }
export default store