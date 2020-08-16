export const SET_PROFFIES = "@proffy/proffies/set"

const initialState = []

export default function proffiesReducer(state = initialState, action) {
    switch(action.type) {
        case SET_PROFFIES:
            return [...action.payload]
        default:
            return state
    }
}

export const actionSetProffies = (proffies) => ({type: SET_PROFFIES, payload: proffies})