import React from "react"
import { useSelector, useDispatch } from "react-redux"

function Profile() {
    let profile = useSelector((state) => state.profile)
    console.log(profile)
    return <div>Profile</div>
}

export default Profile
