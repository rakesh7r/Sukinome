import React from "react"
import { One } from "../Assets"

function ProfilePostCard() {
    return (
        <div className="profile-post-card-container float-effect m-small">
            <img src={One} alt="" className="float-effect" />
            <footer className="flex-row align-center justify-space-between">
                <div className="flex-row align-center">
                    <i className="bx bx-heart huge-font" />{" "}
                    <span style={{ marginTop: -3, marginLeft: 5 }}>{123}</span>
                </div>
                <div className="flex-row align-center">
                    <i className="bx bx-star huge-font" />{" "}
                    <span style={{ marginTop: -3, marginLeft: 5 }}>{123}</span>
                </div>
            </footer>
        </div>
    )
}

export default ProfilePostCard
