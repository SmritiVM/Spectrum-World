import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col, Button} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import defaultAvatar from "./assets/avatar/avatar.png";
import Daisy from "./assets/avatar/Daisy_face.png";
import IceCream from "./assets/IceCream.png";
import Trophy from "./assets/Trophy.png";

import WebsiteBackground from "../assets/Background.jpg";
import Back3 from "./assets/background/Back3.jpeg";

import "./Summer.css"

const user = "Alex";

const NextIcon = styled(ForwardIcon)(() => ({
    fontSize: "100px",
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
    marginLeft: "50px",
    scale: "2.5",
}))

export default function SummerEnd(){
    const navigate = useNavigate();
    const [dialogue, setDialogue] = useState(["Wow " + `${user}` + "! This looks amazing! Thank you for joining in and helping us win the competition!", 
    "Let’s go collect our free ice-cream now!", "*Click on the arrow to proceed*"]);
    const [avatar, setAvatar] = useState(<AvatarIcon alt = "Daisy" src = {Daisy}/>)
    const [instructions, setInstructions] = useState()
    
    const goToAutumn = () => {
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"1.7vw"}}>Hurray! You’ve completed the summer season!
                    <br/>Here’s your trophy and of course the ice-cream!
                    </p>
                </Row>
                <Row>
                    <Col md = {6}>
                    <img className="item" src = {Trophy} style={{"scale":"1.5", "marginLeft": "90px"}}></img>
                    </Col>
                    
                    <Col md = {4}>
                    <img  className = "item" src = {IceCream} style={{"scale":"1.25"}}></img>
                    </Col>
                </Row>
                <Row>
                    <p style={{fontSize:"1.7vw"}}>Now let's move ahead to the next season, shall we?</p>
                </Row>
                <Row>
                    <center>
                    <Button  className="helpChoice" style = {{marginTop:"5px"}} onClick={() => navigate("/autumn")}>
                                Autumn leaves are falling down...
                    </Button>
                    </center>
                </Row>
            </Container>
        )
        setAvatar()
        setNext()
        setDialogue()
    }

    const [next, setNext] = useState(
        <NextButton onClick = {goToAutumn}><NextIcon/></NextButton>
    
    )

    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "summer" style={{"backgroundImage":`url(${Back3})`}}>
                <Container fluid className = "instructions">
                   {instructions} 
                </Container>
                <Container fluid className="content" style = {{"backdropFilter":"contrast(60%)"}}>
                    <Row>
                        <Col md = {4}>
                            {avatar}
                        </Col>
                        <Col md = {7}>
                            <p className="dialogue">
                            <Typewriter
                                options = {{
                                    strings: dialogue,
                                    autoStart: true,
                                    deleteSpeed: 0,
                                    delay: 70,
                                    cursor: "",
                                }}    
                            />
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