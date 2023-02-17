import {
    combineReducers,
    applyMiddleware,
    legacy_createStore as createStore,
} from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import profileReducer from "./profileReducer"
import { Provider } from "react-redux"

const rootReducer = combineReducers({
    profile: profileReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export const DataProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)
export default DataProvider
