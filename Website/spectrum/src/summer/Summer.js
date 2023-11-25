import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col, Button} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import defaultAvatar from "./assets/avatar/avatar.png";
import Bobby from "./assets/avatar/Bobby_face.png";
import Daisy from "./assets/avatar/Daisy_face.png";

import WebsiteBackground from "../assets/Background.jpg";
import Back1 from "./assets/background/Back1.jpeg";
import Back2 from "./assets/background/Back2.jpeg";
import Back3 from "./assets/background/Back3.jpeg";

import "./Summer.css";

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


export default function Summer(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${Back1})`);
    const [dialogue, setDialogue] = useState([""]);
    
    const [avatar, setAvatar] = useState()
    const [instructions, setInstructions] = useState(
        <Typewriter
            options = {{
                delay: 70,
                cursor: "",
                deleteSpeed: 0
            }}
            onInit={(typewriter) => {
                typewriter.typeString("Spring passes by as quickly as it comes with the sun slowly extending its stay each day. The air gets warmer and then hotter and families flock towards the beach to bask in the glory of this season. ")
                .pauseFor(2500)
                .deleteAll(0)
                .typeString(`${user}` + " also decides to step outside of the cozy atmosphere at home and enjoy the beautiful sea and golden sand. Click on the arrow to proceed with the story.")
                .start();    
            }}
        />

    )

    //All dialogue changing functions
    const goToPuzzle = () => {
        setAvatar()
        setInstructions(<Container fluid>
            <Row>
                <p style={{fontSize:"2vw"}}>Yoohoo! You're taking part in the '53rd Annual Sandcastle Competition' <br/><br/>
                Drag and drop the puzzle pieces to complete the sandcastle and win the game😊
                (Oh and if you are stuck, we have a hint for you too🤭)</p>
            </Row>
            <Row>
                <center>
                    <Button  className="helpChoice" onClick={() => navigate("/summer/puzzle")}>
                        Start
                    </Button>
                </center>
            </Row>
        </Container>)
        setDialogue()
        setNext()
    }

    const goToUser3 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Why not? This sounds exciting! Let’s start building!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToPuzzle}><NextIcon/></NextButton>)
    }

    const goToDaisy2 = () => {
        setAvatar(<AvatarIcon alt = "Daisy" src = {Daisy} />)
        setInstructions()
        setDialogue(["Yes!! And we really want to win this year! Free ice-cream is just the best!",
        "So would you like  to join our team and build the best sandcastle " + `${user}` + "?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser3}><NextIcon/></NextButton>)
    }

    const goToBobby5 = () => {
        setAvatar(<AvatarIcon alt = "Bobby" src = {Bobby} />)
        setInstructions()
        setDialogue(["Ah, the ‘Sandcastle Building Competition’ is a fun game organized at this beach every year.", 
        "The person or team with the best sandcastle gets a trophy and free ice cream!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToDaisy2}><NextIcon/></NextButton>)
    }

    const goToUser2 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Hi Daisy, I’m " + `${user}` + "! The ‘Annual Sandcastle Building Competition’? What is that?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToBobby5}><NextIcon/></NextButton>)
    }

    const goToDaisy1 = () => {
        setAvatar(<AvatarIcon alt = "Daisy" src = {Daisy} />)
        setInstructions()
        setDialogue(["Hi! I’m Daisy! Have you come to take part in the ‘53rd Annual Sandcastle Building Competition’?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser2}><NextIcon/></NextButton>)
    }

    const goToBack3 = () => {
        setBackground(`url(${Back3})`)
        setAvatar()
        setInstructions()
        setDialogue(["Bobby leads " + `${user}` + " closer to the sea and towards a group of 3 other kids who look up and smile brightly.", 
        "One of them hands " + `${user}`+ " a seashell and introduces herself as Daisy.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToDaisy1}><NextIcon/></NextButton>)
    }
    
    const goToBobby3 = () => {
        setAvatar(<AvatarIcon alt = "Bobby" src = {Bobby} />)
        setInstructions()
        setDialogue(["Hurray! Come, follow me!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToBack3}><NextIcon/></NextButton>)
    }

    const goToBobby4 = () => {
        setAvatar(<AvatarIcon alt = "Bobby" src = {Bobby} />)
        setDialogue(["Sure! No problem! You know where to find us when you’re ready to join"])
        setNext()
    }

    const goToChoice = () => {
        setAvatar()
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"2vw"}}>Would you like to join Bobby and his friends in building sandcastles?</p>
                </Row>
                <Row>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToBobby3} style={{width:"300px", height:"150px"}}>
                            Ah that sounds interesting! I’d love to join in!
                        </Button>
                    </Col>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToBobby4} style={{width:"300px", height:"150px"}}>
                            Maybe after sometime? I’d like to enjoy the sea breeze!
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
        setDialogue()
        setNext()
    }

    const goToBobby2 = () => {
        setAvatar(<AvatarIcon alt = "Bobby" src = {Bobby} />)
        setInstructions()
        setDialogue(["Ah that’s no fun " + `${user}`+ ". Come over and play with us. We’re building sandcastles, it’s going to be fun!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToChoice}><NextIcon/></NextButton>)
    }

    const goToUser1 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["H-Hi Bobby! I’m " + `${user}`+ ". I didn't come to play. I was thinking of looking at the sea and resting in the sand.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToBobby2}><NextIcon/></NextButton>)
    }

    const goToBobby1 = () => {
        setAvatar(<AvatarIcon alt = "Bobby" src = {Bobby} />)
        setInstructions()
        setDialogue(["Hello there! I’m Bobby! Have you come to play at the beach too?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser1}><NextIcon/></NextButton>)
    }

    const goToBack2 = () => {
        setBackground(`url(${Back2})`)
        setAvatar()
        setInstructions()
        setDialogue(["The beach is crowded. " + `${user}` + " sees many happy families near the water and children playing in the sand." ,
        `${user}`+ " is just about to find a cozy place to sit and watch the sea when a young boy approaches " + `${user}` + ".",
         "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToBobby1}><NextIcon/></NextButton>)
    }

    //Use State next
    const [next, setNext] = useState(
        <NextButton onClick = {goToBack2}><NextIcon/></NextButton>
    )
    
    
    
    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "summer" style={{"backgroundImage":background}}>
                <Container fluid className = "instructions">
                   {instructions} 
                </Container>
                <Container fluid className="content">
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