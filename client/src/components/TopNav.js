import React from "react"
import { NavLink } from "react-router-dom"
import { Home } from "../screens"
import { HomeOutlined, UserOutlined } from "@ant-design/icons"
import { Rocket } from "../icons"
function TopNav() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/">
                        <HomeOutlined />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <UserOutlined />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/discover">
                        <i className="bx bx-calendar" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/discover">
                        <Rocket />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default TopNav
