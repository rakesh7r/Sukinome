import { combineReducers } from "redux"
import { byPostionReducer, profileReducer } from "./Reducer"

export default combineReducers({
    byLocation: byPostionReducer,
    user: profileReducer,
})
