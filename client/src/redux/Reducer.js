import {
    BYLOCATION,
    FETCHUSER,
    LOGIN,
    LOGOUT,
    MODAL_OPEN,
    UPDATE_PROFILE,
} from "./Types"
const byLocation = { value: true }
const flags = { modalOpen: false }

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

export const flagsReducer = (state = flags, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                modalOpen: action.payload,
            }
        default:
            return state
    }
}
