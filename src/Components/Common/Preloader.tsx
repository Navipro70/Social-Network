import React, {FC} from "react";
import "../../App.css";
import preloader from "../../Images/loader.svg"

const Preloader: FC = () => (
    <div className="preloader">
        <img src={preloader} alt="loading..."/>
    </div>
);

export default Preloader;