import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "antd"
import { signout } from "../redux/Actions"
import ProfilePostCard from "../Components/ProfilePostCard"

function Profile() {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    return (
        <div className="profile-container flex-row ">
            <aside className="flex-col float-effect align-center justify-space-between">
                <div className="flex-col align-center">
                    <img
                        src={user.photoURL}
                        className="round-image m-b-huge"
                        alt="profilepicture"
                    />
                    <h3 className="m-b-medium">{user.displayName}</h3>
                    <span className="m-b-huge">Bio</span>
                    <div className="flex-row justify-space-between width-100 m-b-huge">
                        <div className="flex-col align-center">
                            <h1>{123}</h1>
                            <b>
                                <span>Following</span>
                            </b>
                        </div>
                        <div className="flex-col align-center">
                            <h1>{123}</h1>
                            <b>
                                <span>Followers</span>
                            </b>
                        </div>
                    </div>
                    <div className="flex-row justify-space-between width-100">
                        <div className="flex-col align-center">
                            <h1>{123}</h1>
                            <b>
                                <span>Local #</span>
                            </b>
                        </div>
                        <div className="flex-col align-center">
                            <h1>{123}</h1>
                            <b>
                                <span>Global #</span>
                            </b>
                        </div>
                    </div>
                </div>
                <div className="width-100">
                    <Button className="width-100" style={{ marginBottom: 15 }}>
                        Edit Profile
                    </Button>
                    <Button
                        className="profile-signout"
                        style={{
                            width: "100%",
                        }}
                        onClick={() => {
                            dispatch(signout())
                        }}
                    >
                        Sign Out
                    </Button>
                </div>
            </aside>
            <main className=" flex-row flex-wrap ">
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
                <ProfilePostCard />
            </main>
        </div>
    )
}

export default Profile
