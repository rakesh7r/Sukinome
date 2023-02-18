import { applyMiddleware, legacy_createStore as createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import RootReducer from "./RootReducer"

export default createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
