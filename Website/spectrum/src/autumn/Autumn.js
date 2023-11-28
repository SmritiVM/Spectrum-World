import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import {Container, Row , Col, Button} from "react-bootstrap";
import { IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';

import ForwardIcon from '@mui/icons-material/Forward';
import {Avatar} from "@mui/material";

import Typewriter from "typewriter-effect";

import WebsiteBackground from "../assets/Background.jpg";
import intro from "./assets/backgrounds/intro.png";
import intro2 from "./assets/backgrounds/intro2.png";
import kitchen from "./assets/backgrounds/kitchen.png";

import defaultAvatar from "./assets/avatar/avatar.png";
import Granny from "./assets/avatar/granny.png";
import "./Autumn.css";

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

export default function Autumn(){
    const navigate = useNavigate();
    const [background, setBackground] = useState(`url(${intro})`);
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
                typewriter.typeString("As summer waves goodbye and melts away like ice cream, a cool breeze whispers the arrival of autumn. Brr...brr... The leaves are turning into shades of gold, and the delightful crunch underfoot is like nature's own music.")
                .pauseFor(2500)
                .deleteAll(0)
                .typeString(`${user}` + " is soaking in the beauty of fall, cozied up in his grandmother's house, sipping on hot chocolate. Click on the arrow to proceed with the story.")
                .start();    
            }}
        />

    )

    const goToUser1 = () => {
        setBackground(`url(${intro2})`)
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["This hot chocolate is delicious! It's perfect for this weather.", "Oh sniff sniff… Ooo what a sweet smell !",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {LeaveRoom}><NextIcon/></NextButton>)
    }
    const LeaveRoom = () => {
        setAvatar()
        setInstructions()
        setDialogue(["A delightful scent wafted through the air, and it tickled  " + `${user}` + "'s nose.",
        "Rising from the comfy sofa with a bounce, "+ `${user}` + " couldn't resist the mystery of that wonderful fragrance.", 
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToKitchen}><NextIcon/></NextButton>)
    }
    const goToKitchen = () => {
        setBackground(`url(${kitchen})`)
        setAvatar()
        setInstructions()
        setDialogue(["It led "+ `${user}` +" straight to the heart of the home, the kitchen!",
        "With a rumble in the tummy, "+ `${user}` +" discovered Granny in action, happily kneading away at some dough",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToGranny1}><NextIcon/></NextButton>)
    }
    const goToGranny1 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["Oh my! Well, hello there, "+ `${user}` +"!","What has brought you to my kitchen?",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToUser2}><NextIcon/></NextButton>)
    }

    const goToUser2 = () => {
        setAvatar(<AvatarIcon alt = "Person" src = {defaultAvatar} />)
        setInstructions()
        setDialogue(["Oh, Granny! I caught a whiff of the most scrumptious smell, and I just had to investigate!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToGranny2}><NextIcon/></NextButton>)
    }

    const goToGranny2 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["Well, aren't you a curious one!",
        "I reckon you sniffed out the cinnamon I've got all set to whip up a delicious apple pie.",
        "Now, "+ `${user}` +", since you're here and all curious, how about lending me a hand?",
        "I could use some help gathering apples from the garden for our special pie.",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToChoice}><NextIcon/></NextButton>)
    }

    const goToCatchApple = () => {
        setAvatar()
        setInstructions(<Container fluid>
            <Row>
                <p style={{fontSize:"2vw"}}>
                Help Granny and Alex catch the juicy apples that are just falling down. It takes 10 apples to make granny’s special apple pie.<br/><br/>
                Use the right and left key arrows to move the basket and catch the falling apples.
                </p>
            </Row>
            <Row>
                <center>
                    <Button  className="helpChoice" onClick={() => navigate("/autumn/applecatch")}>
                        Start
                    </Button>
                </center>
            </Row>
        </Container>)
        setDialogue()
        setNext()
    }

    const goToGranny3 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setInstructions()
        setDialogue(["That's wonderful dear.",
        "Lets grab our jackets and head towards the big apple tree!",
        "*Click on the arrow to proceed*"])
        setNext(<NextButton onClick = {goToCatchApple}><NextIcon/></NextButton>)
    }

    const goToGranny4 = () => {
        setAvatar(<AvatarIcon alt = "Granny" src = {Granny} />)
        setDialogue(["Of course darling! Let me know when you’re ready"])
        setNext()
    }

    const goToChoice = () => {
        setAvatar()
        setInstructions(
            <Container fluid>
                <Row>
                    <p style={{fontSize:"2vw"}}>Would you like to join go out to collect apples?</p>
                </Row>
                <Row>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToGranny3} style={{width:"300px", height:"150px"}}>
                            Wow! That sounds fun. Lets go!
                        </Button>
                    </Col>
                    <Col md = {6}>
                        <Button  className="helpChoice" onClick={goToGranny4} style={{width:"300px", height:"150px"}}>
                        Oh Granny. I just have to finish drinking my hot chocolate and then we can head off !
                        </Button>
                    </Col>
                </Row>
            </Container>
        )
        setDialogue()
        setNext()
    }


    const [next, setNext] = useState(
        <NextButton onClick = {goToUser1}><NextIcon/></NextButton>
    )

return(
    <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}>
        <Container fluid className = "autumn" style={{"backgroundImage":background}}>
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