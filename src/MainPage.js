import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { Button, FormGroup, Input, Label,Text } from 'reactstrap'
import './MainPage.css'
import pizzaİmg from './adv-form-banner.png';
const main = () => {
    const history = useHistory();
    const handleAciktimClick = () => {
        history.push('./SiparisFormu');
    }




    return (
        <div className="main"  style={{ backgroundColor: '#ce2829'}}>
            <h1>Teknolojik Yemekler</h1>
            <p>KOD ACIKTIRIR PIZZA, DOYURUR</p>

            <div className="button-container">
                <Label>
                <Button id="button" style={{ backgroundColor: '#ffc107', width:'200%', height: '200%', borderRadius: 50}} type="submit" onClick={handleAciktimClick}>
                    <Label style={{ color: 'white'}}>ACIKTIM</Label>
                </Button> 
                </Label>
                </div>
                <img id="pizza-image" src={pizzaİmg} />
        </div>





    )




}
export default main;