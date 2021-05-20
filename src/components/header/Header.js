import React from 'react';
import "./header.styles.scss";
import Navbar from '../navBar/Navbar'


export default function Header(){
   
    return (
        <div className='container'>
             <Navbar />
        <img src='../img/background.jpeg' alt='backgroud' />
       
        <div className='slogan'>
        <h1>I'm Fion</h1>
        <p>A full-stack developer.</p>
        </div>
    </div>
    )
  
}

