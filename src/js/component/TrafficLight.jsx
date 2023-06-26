import React, {useState} from "react";

const TrafficLight = () => {

    const [colorOn, setColorOn] = useState("");
    const [purpleEnabled, setPurpleEnabled] = useState(false);

    const purpleToggle = () => {
        purpleEnabled? setPurpleEnabled(false) : setPurpleEnabled(true);
    };

    return (
        <div className="container-fluid">
            <div className="button-container position-absolute top-0 start-50 translate-middle">
                <button type="button" className="btn btn-sm btn-outline-dark shadow-none purple-button" onClick={purpleToggle}>
                    <strong>Add/Remove</strong> purple light
                </button>
            </div>
            <div className="position-absolute top-50 start-50 translate-middle tenedor">
                    <div className={"lights red " + (colorOn === "red" ? "active": "")} onClick={()=>{colorOn === "red" ? setColorOn(""): setColorOn("red")}}></div>
                    <div className={"lights green " + (colorOn === "green" ? "active": "")} onClick={()=>{colorOn === "green" ? setColorOn(""): setColorOn("green")}}></div>
                    <div className={"lights yellow " + (colorOn === "yellow" ? "active": "")} onClick={()=>{colorOn === "yellow" ? setColorOn(""): setColorOn("yellow")}}></div>
                    {purpleEnabled?
                        <div className={"lights purple " + (colorOn === "purple" ? "active": "")} onClick={()=>{colorOn === "purple" ? setColorOn(""): setColorOn("purple")}}></div>
                        : null
                    }
            </div>
        </div>
    );
};

export default TrafficLight;