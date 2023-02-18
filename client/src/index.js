import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import "./styles/index.css"
import DataProvider from "./redux/DataProvider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </React.StrictMode>
)
