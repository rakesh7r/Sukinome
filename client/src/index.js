import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import "antd/dist/reset.css"
import { Provider } from "react-redux"
import DataProvider, { store } from "./redux/RootStore"
import "./styles/index.css"
import "./output.css"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <DataProvider>
        <App />
    </DataProvider>
)
