import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LoginPage1 from './login.jsx';
// import LoginPage2 from './signup.jsx';
import Home from './Home.js';

//Spring imports
import Spring from './spring/Spring.js';
import FlowerMatch from './spring/Flower-Match/Flower-Match.js';
import Pathway from './spring/Pathway-Game/pathway.js';
import BeeGame from './spring/Bee-Game/BeeGame.js';
import SpringEnd from './spring/SpringEnd.js';

//Summer imports
import Summer from './summer/Summer.js';
import Puzzle from './summer/Puzzle.js';
import SummerEnd from './summer/SummerEnd.js';

//Autumn imports
import Autumn from './autumn/Autumn.js';
import AppleCatch from './autumn/catchApple.js';
export default function page(){
    return (
        // <div>
        //     {/* <LoginPage1/> */}
        //     {/* <LoginPage2/> */}
        // </div>
        <Router>
            <Routes>
                <Route path = "/" element = {<Home/>}/>

                {/* Spring Routes */}
                <Route path = "/spring" element = {<Spring/>}/>
                <Route path = "/spring/flower" element = {<FlowerMatch/>}/>
                <Route path = "/spring/pathway" element = {<Pathway/>}/>
                <Route path = "/spring/bee" element = {<BeeGame/>}/>
                <Route path = "/spring/end" element = {<SpringEnd/>}/>

                {/* Summer Routes */}
                <Route path = "/summer" element = {<Summer/>}/>
                <Route path = "/summer/puzzle" element = {<Puzzle/>}/>
                <Route path = "/summer/end" element = {<SummerEnd/>}/>

                 {/* Autumn Routes */}
                 <Route path = "/autumn" element = {<Autumn/>}/>
                 <Route path = "/autumn/applecatch" element = {<AppleCatch/>}/>
            </Routes>
        </Router>
    );
}