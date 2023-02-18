import { BYLOCATION, FETCHUSER, LOGIN, LOGOUT, UPDATE_PROFILE } from "./Types"
const byLocation = { value: true }

export const byPostionReducer = (state = byLocation, action) => {
    switch (action.type) {
        case BYLOCATION:
            return { value: action.payload }
        default:
            return state
    }
}

const profileState = null
export const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            return action.payload
        default:
            return state
    }
}
