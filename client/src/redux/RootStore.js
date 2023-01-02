import {
    combineReducers,
    applyMiddleware,
    legacy_createStore as createStore,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import profileReducer from "./profileReducer"

const rootReducer = combineReducers({
    profile: profileReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
