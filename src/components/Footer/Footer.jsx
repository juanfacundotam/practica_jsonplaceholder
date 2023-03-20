import React from "react";
import style from "./Footer.module.css"
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className={style.divFooter}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
};

export default Footer;
