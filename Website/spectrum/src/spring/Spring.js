import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import defaultAvatar from "./assets/avatar.png";
import WebsiteBackground from "./assets/Background.jpg";
import Back1 from "./assets/backgrounds/back_1.png";
import Back2 from "./assets/backgrounds/back_2.png";
import Back4 from "./assets/backgrounds/back_4.jpg";

import "./Spring.css";


const NextIcon = styled(ForwardIcon)(() => ({
    fontSize: "100px",
    // color: "rgb(11, 141, 11)",
    opacity: "1"
}))

const NextButton = styled(IconButton)(() => ({
    position: "relative",
    marginTop: "20px",
    left: "95%",
    color: "black",
    opacity: "0.8",
    marginLeft: "-104.5px",
    width: "100px",
    
}))

const AvatarIcon = styled(Avatar)(() => ({
    position: "relative",
    marginTop: "50px",
    marginLeft: "100px",
    scale: "2.5",
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
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "spring" style={{"backgroundImage":background}}>
                <Container fluid className="content">
                    <Row>
                        <Col md = {4}>
                            <AvatarIcon alt = "Person" src = {defaultAvatar} />
                        </Col>
                        <Col md = {7}>
                            <p className="dialogue"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            </Col>
                        <Col md = {1}>
                        {next}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Container>
    )
}