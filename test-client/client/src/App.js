import React from "react"
import {
    Routes,
    Route,
    Switch,
    Redirect,
    Navigate,
    BrowserRouter as Router,
} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Discover from "./Pages/Discover"
import TopNav from "./Components/TopNav"
import AddPost from "./Pages/AddPost"

const App = () => {
    return (
        <Router>
            <TopNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/discover" element={<Discover />} />
                <Route path="/addPost" element={<AddPost />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default App
