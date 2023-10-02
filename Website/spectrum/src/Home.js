import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
    const navigate = useNavigate();
    
    return(
        <div>
            <h1>Hi! Home page</h1>
            <hr/>
            <button onClick = {() => navigate("/flower")}>Go to spring</button>
        </div>
    )
    
}
