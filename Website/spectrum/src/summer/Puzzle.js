import { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import WebsiteBackground from "../assets/Background.jpg";
// import Back1 from "./assets/back_1.png";
import Sandcastle1 from "./assets/sandcastles/Sandcastle1.jpeg";
import Sandcastle2 from "./assets/sandcastles/Sandcastle2.jpeg";
import Sandcastle3 from "./assets/sandcastles/Sandcastle3.jpeg";
import Sandcastle4 from "./assets/sandcastles/Sandcastle4.jpeg";
import Sandcastle5 from "./assets/sandcastles/Sandcastle5.jpeg";
import Sandcastle6 from "./assets/sandcastles/Sandcastle6.jpeg";


import "./Summer.css";

export default function Puzzle(){
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
        // setHintButton(
        // <button onClick={viewHint}>View Hint</button>
        // )
    }
    const viewHint = () => {
        setHint(
            <img src={Sandcastle} className="hint-image" alt = "Sandcastle"></img>
        )
        // setHintButton(
        //     <button onClick={closeHint}>Close Hint</button>
        // )
    }

    // const [hintButton, setHintButton] = useState(
    //     <button onClick={viewHint}>View Hint</button>
    // );


    const goToEnd = () => {
        alert("Yoohoo! You've done it!");
    }
    return(
        <Container fluid style={{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className="summer">
                 {/* style={{"backgroundImage": `url(${Back1})`}}> */}
                <div className="puzzle-container">
                    <JigsawPuzzle
                    imageSrc={Sandcastle}
                    rows = {3}
                    columns = {3}
                    onSolved = {goToEnd}
                    />
                </div>
                {hint}
                {/* {hintButton} */}
                <button onClick={viewHint} className="hint-button">View Hint</button>
                <button onClick={closeHint} className="hint-button">Close Hint</button>
            </Container>
        </Container>
    )
}