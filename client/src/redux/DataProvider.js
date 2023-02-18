import { Provider } from "react-redux"
import store from "./Store"

const DataProvider = ({ children }) => (
    <Provider store={store}>{children}</Provider>
)

export default DataProvider
