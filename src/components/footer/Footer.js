import React from 'react';
import { FaGithub,FaRegEnvelope } from 'react-icons/fa';
import './footer.styles.scss';


export default function Footer(){
    return(
        <div className='footer' id='contact'>
             <a  href="https://www.linkedin.com/in/fionliang/"><FaGithub /></a>
             <a  href="mailto:fionloves1024@gmail.com"><FaRegEnvelope /></a>
              <p>© 2021 Fion L.</p>
        </div>
    )
};