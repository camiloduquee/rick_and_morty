import React from "react";
import style from  './Log.module.css';
import {useNavigate } from "react-router-dom";

function Log (){
    
    const navigate = useNavigate();
       
    function Acceso (){
        
        navigate('/Home');
        return  console.log(navigate);
    }
    return (
        <div>
            <h1>Logeate</h1>
            <button onClick={Acceso}>Ingresar</button>
        </div>
    );
}
export default Log;