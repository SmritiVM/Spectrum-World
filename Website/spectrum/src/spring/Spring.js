import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Spring(){
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>This is spring page</h1>
            <hr/>
            <button onClick = {() => navigate("/flower")}>Go to flower match game</button>
        </div>
    )
}