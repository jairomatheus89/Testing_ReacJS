import React from "react";
import './ticker.css';

const Ticker = ({text}) => {
    return(
        <div
            className="ConteinerTicker"
        >
            <div
                className="Ticker"
            >
                <span>{text}</span>
                <span>{text}</span>
            </div>
        </div>
    );
};

export default Ticker;