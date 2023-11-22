import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col, Button} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import defaultAvatar from "./assets/avatar.png";
import WebsiteBackground from "../assets/Background.jpg";
import BeeGarden from "./Bee-Game/assets/bee_garden.jpeg";
import Bee from "./Bee-Game/assets/bee.png";
import Honey from "./assets/honey.png";
import FlowerBouquet from "./assets/flower_bouquet.png";

import "./Bee-Game/BeeGame.css";
import "./Spring.css";

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

export default function SpringEnd(){
    const navigate = useNavigate();
    const [dialogue, setDialogue] = useState(["Thank you for the help, " + `${user}` + "." ,
    "I'll be returning to my hive to store all this nectar collected.",
    "It was lovely meeting you, " + `${user}` + " and thanks once again",
    "Bzz..bzz..Bye!", "*Click on the arrow to proceed*"]);
    const [avatar, setAvatar] = useState(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
    const [instructions, setInstructions] = useState()
    const [contentContrast, setContentContrast] = useState("100%");

    const goToSummer = () => {
        navigate('/summer');
    }
    const goToEnd = () => {
        setContentContrast("100%");
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"1.7vw"}}>Hurray! You've managed to complete the spring season! Well Done!
                    <br/>Here's a token of appreciation from Buzz
                    </p>
                </Row>
                <Row>
                    <Col md = {6}>
                    <img className="item" src = {Honey} style={{"scale":"1.5", "marginLeft": "90px"}}></img>
                    </Col>
                    
                    <Col md = {4}>
                    <img  className = "item" src = {FlowerBouquet} style={{"scale":"2"}}></img>
                    </Col>
                </Row>
                <Row>
                    <p style={{fontSize:"1.7vw"}}>Now let's move ahead to the next season, shall we?</p>
                </Row>
                <Row>
                    <center>
                    <Button  className="helpChoice" style = {{marginTop:"5px"}} onClick={goToSummer}>
                                Get Ready for the heat!
                    </Button>
                    </center>
                </Row>
            </Container>
        )
        setAvatar()
        setNext()
        setDialogue()
    }
    const goToUser1 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />);
        setDialogue(["Bye Bye Buzz! It was nice meeting you too.",
        "I hope to see you next spring.", "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToEnd}><NextIcon/></NextButton>)
    } 
    const [next, setNext] = useState(
        <NextButton onClick = {goToUser1}><NextIcon/></NextButton>
    
    )

    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "spring" style={{"backgroundImage":`url(${BeeGarden})`}}>
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