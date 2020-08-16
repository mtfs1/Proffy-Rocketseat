import {combineReducers} from "redux"

import proffiesReducer from "./proffies"
import favouritesReducer from "./favourites"

const reducer = combineReducers({
    proffies: proffiesReducer,
    favourites: favouritesReducer
})

export default reducer