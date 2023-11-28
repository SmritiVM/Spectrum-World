import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col, Button} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import WebsiteBackground from "../assets/Background.jpg";

import gather from "./assets/backgrounds/gather.png";
import making from "./assets/backgrounds/making.png";
import finished from "./assets/backgrounds/applepie.png";
import eat from "./assets/backgrounds/chat.png";

import defaultAvatar from "./assets/avatar/avatar.png";
import Granny from "./assets/avatar/granny.png";
import "./Autumn.css";

import applepie from "./assets/prize/applepie.png";
import maple from "./assets/prize/maple.png";

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

export default function AutumnEnd(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${gather})`);
    const [dialogue, setDialogue] = useState(["Great job, " + `${user}` +"! You've got a knack for apple picking.",
    "Now, let's head back to the kitchen and turn these beauties into a scrumptious apple pie.",
    "*Click on the arrow to proceed*"]);
    //setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
    const [avatar, setAvatar] = useState(<AvatarIcon alt = "Granny" src = {Granny} />)
    const [instructions, setInstructions] = useState()
    
    const goToUser3 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Yay, Granny! I can't wait to see how it's done.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToKitchen2}><NextIcon/></NextButton>)
    }

    const goToKitchen2 = () => {
        setBackground(`url(${making})`)
        setAvatar()
        setInstructions()
        setDialogue(["In the kitchen, the delightful aroma of cinnamon and apples fills the air as Granny and "+ `${user}` + " work side by side.",
        "They peel and slice the apples & sprinkle them with cinnamon and sugar.",
        "They work together, mixing ingredients and preparing the pie with joy and laughter.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToGranny5}><NextIcon/></NextButton>)
    }

    const goToGranny5 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["Now, into the oven it goes. While it bakes, why don't we sit and chat?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser4}><NextIcon/></NextButton>)
    }

    const goToUser4 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Sounds good, Granny. I love our cooking adventures.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToPie}><NextIcon/></NextButton>)
    }

    const goToPie = () => {
        setBackground(`url(${finished})`)
        setAvatar()
        setInstructions()
        setDialogue(["As they wait for the pie to bake, the kitchen fills with the warm scent of the delicious treat.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToGranny6}><NextIcon/></NextButton>)
    }

    const goToGranny6 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["There we go, " + `${user}` +"! Our apple pie is ready.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser5}><NextIcon/></NextButton>)
    }

    const goToUser5 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Wow, Granny, it looks amazing! Can we have a slice now?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToGranny7}><NextIcon/></NextButton>)
    }

    const goToGranny7 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["Absolutely, my dear. Let's enjoy the fruits of our labor together.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToTable}><NextIcon/></NextButton>)
    }

    const goToTable = () => {
        setBackground(`url(${eat})`)
        setAvatar()
        setInstructions()
        setDialogue(["They sit down, savoring the first bite of the homemade apple pie.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser6}><NextIcon/></NextButton>)
    }

    const goToUser6 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Granny, this is the best apple pie ever!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToGranny8}><NextIcon/></NextButton>)
    }

    const goToGranny8 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["Well, thank you, " + `${user}` +". It's not just the pie; it's the company that makes it special.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToWinter}><NextIcon/></NextButton>)
    }

    const [next, setNext] = useState(
        <NextButton onClick = {goToUser3}><NextIcon/></NextButton>
    )

    const goToWinter = () => {
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"1.7vw"}}>Hurray! You’ve completed the autumn season!
                    <br/>Here’s a maple leaf and granny's special apple pie to take home!
                    </p>
                </Row>
                <Row>
                    <Col md = {6}>
                    <img className="item" src = {applepie} style={{"scale":"1.5", "marginLeft": "90px"}}></img>
                    </Col>
                    
                    <Col md = {4}>
                    <img  className = "item" src = {maple} style={{"scale":"1.25"}}></img>
                    </Col>
                </Row>
                <Row>
                    <p style={{fontSize:"1.7vw"}}>Now let's move ahead to the next season, shall we?</p>
                </Row>
                <Row>
                    <center>
                    <Button  className="helpChoice" style = {{marginTop:"5px"}} onClick={() => navigate("/winter")}>
                                Winter Wonderland arrives...
                    </Button>
                    </center>
                </Row>
            </Container>
        )
        setAvatar()
        setNext()
        setDialogue()
    }

    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
            <Container fluid className = "autumn" style={{"backgroundImage":background}}>
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