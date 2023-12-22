import React from "react";
import "./Cards.css";

const Cards = () => {
    return (
        <div className="frame">
            <a href = "#">
                <div className="overlap">
                    <div className="text-wrapper">SPRING</div>
                </div>
            </a>
            <a href = "#">
                <div className="overlap-group">
                    <div className="div">WINTER</div>
                </div>
            </a>
            <a href = "#">
                <div className="div-wrapper">
                    <div className="text-wrapper-2">SUMMER</div>
                </div>
            </a>
        </div>
    )
}
export default Cards;
