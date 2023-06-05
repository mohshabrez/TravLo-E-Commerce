import "./loader.css"
import React from "react";
import loadingImg from "../../Images/loading.gif"

export function Loader(){
    return(
        <div className="loader">
            <img src={loadingImg} alt="loading"/>
        </div>
    )
}