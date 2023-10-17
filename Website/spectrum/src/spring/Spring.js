import {React, useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col} from "react-bootstrap";

import Back1 from "./assets/back_1.png";

import "./Spring.css";

export default function Spring(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${Back1})`);
    
    return(
        <Container fluid className = "spring" style={{"backgroundImage":background}}>
            <Row>
            <h1>This is spring page</h1>
            </Row>
            <Row>
                <Col md = {11}><div></div></Col>
                <Col>
                <button className = "next" onClick = {() => navigate("/flower")}>Go to flower match game</button>
                </Col>
            </Row>
        </Container>
    )
}