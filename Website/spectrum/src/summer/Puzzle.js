import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import WebsiteBackground from "../assets/Background.jpg";
import Back3 from "./assets/background/Back3_saturated.png";

import Sandcastle1 from "./assets/sandcastles/Sandcastle1.jpeg";
import Sandcastle2 from "./assets/sandcastles/Sandcastle2.jpeg";
import Sandcastle3 from "./assets/sandcastles/Sandcastle3.jpeg";
import Sandcastle4 from "./assets/sandcastles/Sandcastle4.jpeg";
import Sandcastle5 from "./assets/sandcastles/Sandcastle5.jpeg";
import Sandcastle6 from "./assets/sandcastles/Sandcastle6.jpeg";


import "./Summer.css";

export default function Puzzle(){
    const navigate = useNavigate();
    
    // Selection of puzzle image on random
    const sandcastles = [Sandcastle1, Sandcastle2, Sandcastle3, Sandcastle4, Sandcastle5, Sandcastle6];
    const [Sandcastle, setSandcastle] = useState();


    const selectSandcastle = () => {
        const len = sandcastles.length;
        setSandcastle(sandcastles[Math.floor(Math.random() * len)]);
    }

    useEffect(() => {
        selectSandcastle()
    }, [])

    // Showing hint image
    const [hint, setHint] = useState();
    
    const closeHint = () => {
        setHint();
    }

    const viewHint = () => {
        setHint(
            <img src={Sandcastle} className="hint-image" alt = "Sandcastle"></img>
        )
    }



    const goToEnd = () => {
        alert("Yoohoo! You've done it!");
        navigate("/summer/end");
        
    }
    return(
        <Container fluid style={{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className="summer" style={{"backgroundImage": `url(${Back3})`}}>
                <div className="puzzle-container">
                    <JigsawPuzzle
                    imageSrc={Sandcastle}
                    rows = {3}
                    columns = {3}
                    onSolved = {goToEnd}
                    />
                </div>
                
                {/* {hintButton} */}
                <div className="hint">
                {hint}
                <Button onClick={viewHint} className="hint-button">View Hint</Button>
                <Button onClick={closeHint} className="hint-button">Close Hint</Button>
                </div>
            </Container>
        </Container>
    )
}