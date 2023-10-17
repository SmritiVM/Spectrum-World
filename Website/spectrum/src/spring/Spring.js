import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container} from "react-bootstrap";

import Back1 from "./assets/back_1.png";

import "./Spring.css";

export default function Spring(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${Back1})`);
    
    return(
        <div className = "container" style={{"backgroundImage":background}}>
            <h1>This is spring page</h1>
            <hr/>
            <button className = "next" onClick = {() => navigate("/flower")}>Go to flower match game</button>
        </div>
    )
}