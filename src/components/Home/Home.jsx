import React from "react";
import Cards from "../Cards/Cards";
import style from "./Home.module.css"



const Home = () => {
return (
    <div className={style.divHome}>
        <Cards/>
    </div>
)
}

export default Home;