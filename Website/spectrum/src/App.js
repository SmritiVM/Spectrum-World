import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import LoginPage1 from './login.jsx';
// import LoginPage2 from './signup.jsx';
import Home from './Home.js';
import Flower_Match from './spring/Flower-Match.js';

export default function page(){
    return (
        // <div>
        //     {/* <LoginPage1/> */}
        //     {/* <LoginPage2/> */}
        // </div>
        <Router>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/flower" element = {<Flower_Match/>}/>
            </Routes>
        </Router>
    );
}