// Flower-Match minigame
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import {images} from './flowers';
import WebsiteBackground from "../assets/Background.jpg";
import BeeGarden from "../Bee-Game/assets/bee_garden.jpeg";

import './Flower-Match.css';
import '../Spring.css'

export default function FlowerMatch(){
    const COVER_IMG = "https://progitek.no/privat/bp/wp-content/uploads/2021/09/pexels-pixabay-235985-scaled.jpg";
    const [imagesArray, setImagesArray] = useState([]);
    const [cardsChosen, setCardsChosen] = useState([]);
    const [cardsChosenIds, setCardsChosenIds] = useState([]); //Maintaining sep array for ids because 2 pics may be the same but not 2 ids
    
    //To not flip successfully matched pairs
    const [openCards, setOpenCards] = useState([]);
    

    //Creating the array of images
    function createBoard(){
        const imagesGenerated = images.concat(...images);
        const shuffledImages = shuffleArray(imagesGenerated);
        setImagesArray(shuffledImages);

    }

    //Fisher Yates shuffling algo
    function shuffleArray(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function flipImage(image, index){
        if (cardsChosen.length === 1 && cardsChosenIds[0] === index) return;

        if (cardsChosen.length < 2){
            setCardsChosen(cardsChosen => cardsChosen.concat(image));
            setCardsChosenIds(cardsChosenIds => cardsChosenIds.concat(index));

            if (cardsChosen.length === 1){
                if (cardsChosen[0] === image){
                    setOpenCards(openCards => openCards.concat([cardsChosen[0], image]))
                }

                setTimeout(() => {
                    setCardsChosenIds([])
                    setCardsChosen([])
                }, 700);
            }
        }

    }
    
    function isCardChosen(image, index){
        return cardsChosenIds.includes(index) || openCards.includes(image);
    }

    useEffect(() => {
        createBoard()
    }, [])

    return(
        <Container fluid className="back" style = {{"backgroundImage": `url(${WebsiteBackground})`}}> 
            <Container fluid className = "spring" style={{"backgroundImage":`url(${BeeGarden})` ,"filter": "saturate(70%)"}}>
                <div className="imageBoard">
                    <div className="row imgRow">
                        {imagesArray.map((image, index) => {
                            return(
                                <div className = "col-4 col-lg-2 flipped" key = {index} onClick={() => flipImage(image, index)}>
                                <img src = {isCardChosen(image, index) ? image : COVER_IMG} alt = "" 
                                className= "imageCard"/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </Container>
    )
}