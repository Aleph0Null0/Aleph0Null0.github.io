import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate()
    const goPlace = () => {
        navigate("/home");
    };
    
    return (
        <>
            <button className="button is-primary" onClick={goPlace()}>
                <content className="has-text-dark">go home</content>
            </button>
        </>
    )
};
