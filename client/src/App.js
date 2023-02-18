import React, { useEffect } from "react"
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
import AddPost from "./Pages/AddPost"
import { useDispatch, useSelector } from "react-redux"
import { signin } from "./redux/Actions"
import Login from "./Pages/Login"
import TopNav from "./components/TopNav"
const App = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user) {
            dispatch(signin())
        }
    }, [])
    return (
        <>
            {user === null ? (
                <Login />
            ) : (
                <Router>
                    <TopNav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/discover" element={<Discover />} />
                        <Route path="/addPost" element={<AddPost />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </Router>
            )}
        </>
    )
}

export default App
