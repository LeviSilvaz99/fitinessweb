import React from 'react'
import toggleImg from '../../Assets/toggle.png'
import './styles.css'

const Header = () => 
    <header>
            <a href="#" className="logo"><span>Fit</span>nesss </a>
            <div className="toggle"> <img src={toggleImg} /> </div>
    </header>


export default Header