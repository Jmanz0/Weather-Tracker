import "./style.css"
import Weather from "./weather"
import React, { useEffect, useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import axios from 'axios';
// const MY_KEY = "01468907ecd2a577fc8b42f97a1dacc8";
const MY_KEY = "843410c04de14eb7b83220736221610";

export default function Top() {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
        modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });


    const [ datas, setDatas ] = useState({});
    const [city, setCity] = useState("Vancouver");

    function getDatas() {
        let URL = `http://api.weatherapi.com/v1/current.json?key=${MY_KEY}&q=${city}`;
        axios.get(URL).then((res) =>
        {
            console.log(city);
            console.log(URL);
            console.log("%d", res.data);
            return res.data;
        }).then((data) => {
            setDatas({temp_c: data.current.temp_c, text: data.current.condition.text, iconURL: data.current.condition.icon, cityName : data.location.name});
        }).catch((err) => {
            if (err) {
            console.error("Cannot fetch weather data ", err);
            }
        })
    }

    useEffect(() => {
        getDatas();
    }, [])

    function onToggle() {
        setIsLocationOpen((prev) => !prev);
    }

    function doOnClick() {
        getDatas();
        onToggle();

    }

    const popperDiv =
        <div className = "popup-container" ref={setPopperElement} style={styles.popper} {...attributes.popper}>
            <div className="form">
                <label htmlFor="location-name">Location Name</label>
                <input id = "location-name" type="text" value = {city} onChange = {e => setCity(e.target.value)} placeholder="City Name" />
                <button className="btn form-btn" onClick={doOnClick}>Select</button>
            </div>
        <div ref={setArrowElement} style={styles.arrow} />

    </div>;
    return (
        <div className = "top-container">
            <div className="title"> Weather Clone </div>
            <Weather {...datas} />
            <button className="btn" ref={setReferenceElement} onClick={onToggle}>Select Location</button>
            {isLocationOpen && popperDiv}
        </div>
    )
}