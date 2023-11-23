import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col, Button} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import defaultAvatar from "../assets/avatar.png";
import BeeGarden from "./assets/bee_garden.jpeg";
import WebsiteBackground from "../../assets/Background.jpg";

import Bee from "./assets/bee.png";
import Cow from "./assets/cow.png";
import Duckie from "./assets/duckie.png";

import "../Spring.css";
import "./BeeGame.css";


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


export default function BeeGame(){
    const navigate = useNavigate();
    const [dialogue, setDialogue] = useState(["Whew! " + `${user}` + " manages to answer all the questions",
    "But wait...what is this? Bzz..bzz..",
"Who is making this sound? Who is hiding in the flowers? ", "*Click on the arrow to proceed*"]);

    const [avatar, setAvatar] = useState()
    const [instructions, setInstructions] = useState()

    const goToFlower = () => {
        setAvatar()
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"2vw"}}>Let's help Buzz collect flowers, shall we? <br/><br/>
                    Flip 2 cards at a time to find the hidden flowers.
                     If the flowers are the same, it is a match and Buzz gets to keep the flower! Match all flowers to win the game😊</p>
                </Row>
                <Row>
                    <center>
                        <Button  className="helpChoice" onClick={() => navigate("/spring/flower")}>
                            Start
                        </Button>
                    </center>
                </Row>
            </Container>
        )
        setDialogue()
        setNext()

    }
    const goToBuzz3 = () => {
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["All right! I'll see you soon! Bzz...bz.."])
        setNext()

    }

    const goToBuzz4 = () => {
        setInstructions()
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["Thank you! Off we go, buzzing to infinity and bee-yond!", "*Click on the arrow to proceed*"])
        setNext(
            <NextButton onClick = {goToFlower}><NextIcon/></NextButton>
        )

    }
    const gotoBuzzHelp = () => {
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"2vw"}}>Could you help Buzz find some flowers?</p>
                </Row>
                <Row>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToBuzz4} style={{width:"300px", height:"150px"}}>
                            Sure I'd love to!
                        </Button>
                    </Col>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToBuzz3} style={{width:"300px", height:"150px"}}>
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
            "I've been buzzing around them to make some honey. Could you help me find some flowers?", "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {gotoBuzzHelp}><NextIcon/></NextButton>)
    }

    const goToUser1 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setDialogue(["Hello Buzz!", "My name is " + `${user}` + ".", "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToBuzz2}><NextIcon/></NextButton>)
    }

    const goToBuzz1 = () => {
        setInstructions()
        setAvatar(<AvatarIcon alt = "Bee" src = {Bee} style={{"scale":"5"}} />)
        setDialogue(["Hello there! I'm Buzz the Bee. What is your name?", "*Click on the arrow to proceed*"])
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
            <Container fluid>
            <Row>
                <p style={{fontSize:"2vw"}}>Who is hiding behind the flowers?</p>
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
                                    delay: 70,
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