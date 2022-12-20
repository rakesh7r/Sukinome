import { combineReducers, applyMiddleware, createStore } from "redux"
const FETCH_PROFILE = "FETCH_PROFILE"
const UPDATE_PROFILE = "UPDATE_PROFILE"

const profileState = {
    name: "null",
}

const fetchProfiles = () => ({
    type: FETCH_PROFILE,
    payload: "",
})
const updateProfile = (newProfile) => ({
    type: UPDATE_PROFILE,
    payload: newProfile,
})

const profileReducer = (state = profileState, action) => {
    switch (action.type) {
        case UPDATE_PROFILE:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    profile: profileReducer,
})

export const store = createStore(rootReducer)
