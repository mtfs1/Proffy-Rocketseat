import {createStore} from "redux"
import {persistStore, persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"

import reducer from "./ducks"

const persistConfig = {
    key: "proffy",
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export {store, persistor}