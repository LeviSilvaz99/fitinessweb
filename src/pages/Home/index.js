import React, { Component } from 'react'

import bgVid from '../../Assets/bg.mp4'
import manImg from '../../Assets/man.png'
import facebookImg from '../../Assets/facebook.png'
import twitterImg from '../../Assets/twitter.png'
import instagramImg from '../../Assets/instagram.png'

import './style.css'

export default class Home extends Component{
    render() {
        return (
            
            <div className="banner">
                <video loop autoPlay> 
                        <source src={bgVid} type="video/mp4"></source>
                    </video>
                <div className="textBox">
                    
                    <h2>Mais Sobre Fitness</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <a href="#">Saber Mais</a>
                </div>
                <div className="imgBox">
                    <img src={manImg} />
                </div>
                
                <ul className="sci">
                    <li> 
                        <a href='#'> 
                            <img src={facebookImg}></img>
                            
                        </a> 
                    </li>
                    <li>
                        <a href='#'>
                            <img src={twitterImg}></img>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={instagramImg}></img>
                        </a>
                    </li>
                </ul>
                

            </div>
        )
    }

}