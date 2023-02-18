import React, { useEffect } from "react"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import Discover from "./Pages/Discover"
import AddPost from "./Pages/AddPost"
import TopNav from "./Components/TopNav"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "./redux/Actions"
import Login from "./Pages/Login"

const App = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (!user) {
            dispatch(getUser())
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
