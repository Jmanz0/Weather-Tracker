import SunImg from "../../images/sun.png"
import React from "react"

export default function Weather(props) {

    const { cityName, temp_c, text, iconURL } = props;
    return (
        <div className="weather-container">
            <div className="header"> {cityName} </div>
            <div className="inner-container">
                <img className="image" src = {iconURL} />
                <div className="current-weather"> {temp_c}° </div>
            </div>
            <div className="footer">{text}</div>
        </div>
    )
}