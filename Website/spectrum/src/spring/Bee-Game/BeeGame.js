import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import defaultAvatar from "../assets/avatar.png";
import BeeGarden from "./assets/bee_garden.jpeg";
import WebsiteBackground from "../assets/Background.jpg";

import Bee from "./assets/bee.png";
import Cow from "./assets/cow.png";
import Duckie from "./assets/duckie.png";

import "../Spring.css";
import "./BeeGame.css";
import {Button}  from "react-bootstrap";

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


export default function BeeGame(){
    const navigate = useNavigate();
    const [dialogue, setDialogue] = useState(["Whew! " + `${user}` + " manages to answer all the questions",
    "But wait...what is this? Bzz..bzz..",
"Who is making this sound? Who is hiding in the flowers? "]);
    // const [pauseDuration, setPauseDuration] = useState(10000);
    // const [autostart, setAutoStart] = useState(false);
    const [avatar, setAvatar] = useState()
    const [instructions, setInstructions] = useState()

    const goToBuzz3 = () => {
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["All right! I'll see you soon! Bzz...bz.."])
        setNext()

    }

    const goToFlower = () => {
        setInstructions()
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["Thank you! Off we go, buzzing to infinity and bee-yond!"])
        setNext(
            <NextButton onClick = {() => navigate("/flower")}><NextIcon/></NextButton>
        )

    }
    const gotoBuzzHelp = () => {
        setInstructions(
            <Container fluid>
                <Row>
                    <p>Could you help Buzz find some flowers?</p>
                </Row>
                <Row>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToFlower}>
                            Sure I'd love to!
                        </Button>
                    </Col>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToBuzz3}>
                            I'd like to look around for some more time. Can I help you later?
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
        setAvatar()
        setDialogue()
        setNext()
    }

    const goToBuzz2 = () => {
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["Nice to meet you " +  `${user}` + ". It's a beautiful day to collect flowers, isn't it?",
            "I've been buzzing around them to make some honey. Could you help me find some flowers?"])
        setNext(<NextButton onClick = {gotoBuzzHelp}><NextIcon/></NextButton>)
    }

    const goToUser1 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setDialogue(["Hello Buzz!", "My name is " + `${user}` + "."])
        setNext(<NextButton onClick = {goToBuzz2}><NextIcon/></NextButton>)
    }

    const goToBuzz1 = () => {
        setInstructions()
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["Hello there! I'm Buzz the Bee. What is your name?"])
        setNext(<NextButton onClick = {goToUser1}><NextIcon/></NextButton>)
    }

    const beeClick = () => {
        alert("Yay! It's a Bumble Bee!");
        goToBuzz1();
    }

    const incorrectClick = () => {
        alert("That doesn't sound quite right. Try again!")
    }

    const goToGuessing = () => {
        setInstructions(
            <Container fluid className="soundGuess">
            <Row>
                <p>Who is hiding behind in flowers?</p>
            </Row>
            <Row>
                <Col md = {4}>
                <img  className = "animalImage" src = {Duckie} onClick={incorrectClick}></img>
                </Col>
                
                <Col md = {4}>
                <img  className = "animalImage" src = {Cow} onClick={incorrectClick}></img>
                </Col>

                <Col md = {4}>
                <img  className = "animalImage" src = {Bee} onClick={beeClick}></img>
                </Col>
                
            </Row>
        </Container> 
        )
        setAvatar()
        setDialogue()
        setNext()

        
    }
    const [next, setNext] = useState(
        <NextButton onClick = {goToGuessing}><NextIcon/></NextButton>
    
    )
    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "spring" style={{"backgroundImage":`url(${BeeGarden})`}}>
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
                                    delay: 0,
                                    deleteSpeed: 0,
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