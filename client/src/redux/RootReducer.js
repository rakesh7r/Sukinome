import { combineReducers } from "redux"
import { byPostionReducer, flagsReducer, profileReducer } from "./Reducer"

export default combineReducers({
    byLocation: byPostionReducer,
    user: profileReducer,
    flags: flagsReducer,
})
