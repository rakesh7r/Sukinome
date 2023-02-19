import React from "react"
import { NavLink } from "react-router-dom"
import { Tooltip } from "antd"
import Search from "antd/es/input/Search"
import { useDispatch, useSelector } from "react-redux"
import { FilledLocation, OutlinedLocation } from "../Assets"
import { updateByLocation } from "../redux/Actions"

function TopNav() {
    const dispatch = useDispatch()
    const byLocation = useSelector((state) => state.byLocation.value)
    return (
        <div className="nav-outer flex-row space-between align-center ">
            <img src={""} alt="logo" />
            <Search
                placeholder="search text"
                allowClear
                onSearch={(text) => {
                    console.log(text)
                }}
                style={{
                    width: 300,
                    marginLeft: 200,
                }}
            />
            <ul className="nav">
                <li>
                    <Tooltip title={byLocation ? "Friends" : "ByLocation"}>
                        <NavLink>
                            {byLocation ? (
                                <img
                                    src={OutlinedLocation}
                                    style={{ height: "20px" }}
                                    className="loc-icon"
                                    alt="byPos"
                                    onClick={() => {
                                        dispatch(updateByLocation(!byLocation))
                                    }}
                                />
                            ) : (
                                <img
                                    src={FilledLocation}
                                    style={{ height: "20px" }}
                                    className="loc-icon"
                                    alt="byPos"
                                    onClick={() => {
                                        dispatch(updateByLocation(!byLocation))
                                    }}
                                />
                            )}
                        </NavLink>
                    </Tooltip>
                </li>
                <li>
                    <NavLink to="/">
                        <i className="bx bx-home huge-font" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/discover">
                        <i className="bx bx-compass huge-font" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/addPost">
                        <i className="bx bx-plus-circle huge-font" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="bx bx-user huge-font" />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default TopNav
