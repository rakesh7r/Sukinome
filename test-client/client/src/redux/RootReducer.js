import { combineReducers } from "redux"
import { byPostionReducer, profileReducer, userReducer } from "./Reducer"

export default combineReducers({
    user: userReducer,
    byLocation: byPostionReducer,
    profile: profileReducer,
})
