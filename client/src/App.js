import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Profile } from "./screens"
import io from "socket.io-client"
import Test from "./test/Test"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getUser } from "./redux/profileReducer"

// export const socket = io.connect("http://localhost:4000")

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Router>
    )
}

export default App
