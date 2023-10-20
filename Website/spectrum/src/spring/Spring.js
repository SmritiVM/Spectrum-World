import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col} from "react-bootstrap";

import Back1 from "./assets/back_1.png";
import Back2 from "./assets/back_2.png";
import Back4 from "./assets/back_4.jpg";

import "./Spring.css";

export default function Spring(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${Back1})`);

    // All background changing functions
    const goToBack4 = () => {
        setBackground(`url(${Back4})`);
        setNext(
            <button className = "next" onClick = {() => navigate("/flower")}>Go to flower match game</button>
        )

    }
    const goToBack2 = () => {
        setBackground(`url(${Back2})`);
        setNext(
            <button className = "next" onClick = {goToBack4}>yo</button>
        )
    }

    const [next, setNext] = useState(
        <button className = "next" onClick = {goToBack2}>Like</button>
    
    )
    
    
    return(
        <Container fluid className = "spring" style={{"backgroundImage":background}}>
            <Row>
            <h1>This is spring page</h1>
            </Row>
            <Row>
                <Col md = {11}><div></div></Col>
                <Col>
                {next}
                </Col>
            </Row>
        </Container>
    )
}