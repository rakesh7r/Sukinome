import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Profile } from "./screens"
import { store } from "./redux/RootStore"
import { Provider } from "react-redux"
import io from "socket.io-client"

export const socket = io.connect("http://localhost:4000")

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </Provider>
    )
}

export default App
