import { ACTION_TYPES } from "../actions/classificado"
const beginState = {
    list: []
}


export const classificado = (state = beginState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        case ACTION_TYPES.CREATE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }

        default:
            return state

    }
}