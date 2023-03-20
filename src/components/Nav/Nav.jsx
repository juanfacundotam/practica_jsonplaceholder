import React from "react";
import style from "./Nav.module.css"
import {Link} from "react-router-dom";
const Nav = () => {
    return (
        <div className={style.divNav}>
            <Link to="/">Home</Link>
            <Link to="/form">CreateUser</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav;