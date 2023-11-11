import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import defaultAvatar from "./assets/avatar.png";
import WebsiteBackground from "./assets/Background.jpg";
import Back1 from "./assets/backgrounds/back_1.png";
import Back2 from "./assets/backgrounds/back_2.png";
import Back3 from "./assets/backgrounds/back_3.png";
import Back4 from "./assets/backgrounds/back_4.jpg";

import "./Spring.css";


const user = "Alex";

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
    marginLeft: "50px",
    scale: "2.5",
}))



export default function Spring(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${Back1})`);
    const [dialogue, setDialogue] = useState([""]);
    // const [pauseDuration, setPauseDuration] = useState(10000);
    // const [autostart, setAutoStart] = useState(false);
    const [avatar, setAvatar] = useState()
    const [instructions, setInstructions] = useState(
        <Typewriter
            options = {{
                delay: 0,
                cursor: "",
                deleteSpeed: 0
            }}
            onInit={(typewriter) => {
                typewriter.typeString("Hello there explorer! Welcome to the season of spring! The gentle breeze, the chirping birds, the blooming flowers…ah the season of vibrant colours and enchanting fragrances - the season when everything comes alive! ")
                .pauseFor(2500)
                .deleteAll(0)
                .typeString("Far, far away, nestled in the heart of such a land lies the homely cottage of our dear protagonist, " + `${user}` + ". Wondering what's in store for spring? Let's follow " + `${user}` + " through the beginning of the journey of seasons and find out along the way. Click on the arrow to proceed with the story.")
                .start();    
            }}
        />

    )

    // const [contentContrast, setContentContrast] = useState("100%");

    
    const goToPathway = () => {
        setDialogue(["Wow! Where did this pathway appear from?",
        "You know what this means?",
        "Come on let's go explore!"]);
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />);
        setNext(
            <NextButton onClick = {() => navigate("/spring/pathway")}><NextIcon/></NextButton>
        )
    }
    // All background changing functions
    const goToBack4 = () => {
        setBackground(`url(${Back4})`);
        setAvatar();
        setDialogue([`${user}` + " gets ready and sets out to explore the beauty outside.", 
        "The lush green trees and the colourful array of flowers sure look enticing.",
    `${user}` + " walks ahead and notices a pathway that leads outside the garden."]);
        setNext(
            <NextButton onClick = {goToPathway}><NextIcon/></NextButton>
        )

    }

    const goToBack3 = () => {
        setBackground(`url(${Back3})`);
        setDialogue(["Oh what a pretty sight!", "The trees look so fresh and the flowers are so vibrant.", "Let's go out and see more!"]);
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />);
        setNext(
            <NextButton onClick = {goToBack4}><NextIcon/></NextButton>
        )
    }
    const goToBack2 = () => {
        setBackground(`url(${Back2})`);
        // setContentContrast("40%");
        // setAutoStart(true);
        setInstructions();
        setDialogue(["It is a wonderful spring morning with the sun shining through the window and the birds singing their song.",
         `${user}` + " slowly wakes up feeling energetic and decides to go and check outside the window."]);
        setNext(
            <NextButton onClick = {goToBack3}><NextIcon/></NextButton>
        )
    }

    //Use State to change dialogues and backgrounds
    const [next, setNext] = useState(
        <NextButton
        onClick = {goToBack2}><NextIcon/></NextButton>
    
    )
    
    
    
    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "spring" style={{"backgroundImage":background}}>
                <Container fluid className = "instructions">
                   {instructions} 
                </Container>
                <Container fluid className="content">
                     {/* style = {{"backdropFilter":{contentContrast}}}> */}
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
                                    delay: 0,
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