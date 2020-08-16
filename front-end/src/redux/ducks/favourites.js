export const ADD_FAVOURITE = "@proffy/favourites/add"
export const REMOVE_FAVOURITE = "@proffy/favourites/remove"
export const FAVOURITE_TRUE = "@proffy/favourites/true"
export const FAVOURITE_FALSE = "@proffy/favourites/false"

const initialState = {
    favourite: false,
    ids: []
}

export default function favouritesReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_FAVOURITE:
            return {...state, ids: [...state.ids, action.payload]}
        case REMOVE_FAVOURITE:
            return {...state, ids: state.ids.filter(fav => fav !== action.payload)}
        case FAVOURITE_TRUE:
            return {...state, favourite: true}
        case FAVOURITE_FALSE:
            return {...state, favourite: false}
        default:
            return state
    }
}

export const actionAddFavourite = id => ({type: ADD_FAVOURITE, payload: id})
export const actionRemoveFavourite = id => ({type: REMOVE_FAVOURITE, payload: id})
export const actionFavouriteTrue = () => ({type: FAVOURITE_TRUE})
export const actionFavouriteFalse = () => ({type: FAVOURITE_FALSE})