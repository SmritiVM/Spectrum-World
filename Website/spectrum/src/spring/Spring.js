import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';

import Back1 from "./assets/back_1.png";
import Back2 from "./assets/back_2.png";
import Back4 from "./assets/back_4.jpg";

import "./Spring.css";


const NextIcon = styled(ForwardIcon)(() => ({
    fontSize: "100px",
    // color: "rgb(11, 141, 11)",
    opacity: "1"
}))

const NextButton = styled(IconButton)(() => ({
    position: "absolute",
    marginTop: "500px",
    bottom: "10px",
    left: "95%",
    marginLeft: "-104.5px",
    width: "100px",
    
}))

export default function Spring(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${Back1})`);

    // All background changing functions
    const goToBack4 = () => {
        setBackground(`url(${Back4})`);
        setNext(
            <NextButton onClick = {() => navigate("/flower")}><NextIcon/></NextButton>
        )

    }
    const goToBack2 = () => {
        setBackground(`url(${Back2})`);
        setNext(
            <NextButton onClick = {goToBack4}><NextIcon/></NextButton>
        )
    }

    const [next, setNext] = useState(
        <NextButton
        onClick = {goToBack2}><NextIcon/></NextButton>
    
    )
    
    
    return(
        <Container fluid className = "spring" style={{"backgroundImage":background}}>
            <Row>
                <Col md = {11}>
                    <p className="dialogue"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet mattis leo, eget maximus 
                        purus dictum ac. In hac habitasse platea dictumst. Integer auctor, leo eu commodo malesuada, ante nisi laoreet mauris, vitae semper felis mauris vitae massa.
                    </p>
                    </Col>
                <Col>
                {next}
                </Col>
            </Row>
        </Container>
    )
}