import React from 'react';
import { Card } from './Card';
import { Jumbotron } from './Jumbotron';
import { Navbar } from './Navbar';

import './style.css';



function App(){
    return(
        <>
        <Navbar/>
        <Jumbotron/>
        <Card/>
        <Card/>
        <Card/>  
        </>
    )
}

export default App;