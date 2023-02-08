import React from "react";
import { useNavigate } from "react-router-dom";

function About () {
    const navigate = useNavigate();
    
    function backToHome(){
        navigate('/home');
    }
    return (
        <div>
                <h1> About </h1>
                <button onClick={backToHome} >X</button>
        </div>
    );
}
export default About;