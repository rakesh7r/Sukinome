import React from "react"
import { One, Two } from "../Assets"

function PostCard({ username, image, time }) {
    return (
        <div className="postcard-container curved-small float-all-sides">
            <header className="flex-row space-between">
                <div className="flex-row justify-center align-center">
                    <img className="post-profile-pic" src={Two} alt="" />
                    <span>{username}</span>
                </div>
                <i className="bx bx-dots-horizontal-rounded padding-small curved-large line-height-2" />
            </header>
            <main>
                <img src={One} alt="postimage" className="post-picture" />
            </main>
            <footer>
                <div className="flex-row p-y-medium">
                    <i className="bx bx-heart huge-font p-x-medium" />
                    <i className="bx bx-comment huge-font  p-x-medium" />
                    <i className="bx bx-send huge-font p-x-medium" />
                    <i className="bx bx-save huge-font p-x-medium" />
                </div>
                <div className="flex-col">
                    {/* <data>uploader</data> */}
                    <span>{time || "6hrs ago"}</span>
                </div>
            </footer>
        </div>
    )
}

export default PostCard
