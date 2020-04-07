import React from "react";
import "../../App.css";
import preloader from "../../Images/loader.svg"

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={preloader} alt="loading..."/>
        </div>
    )
};

export default Preloader;