import React, { useRef, useEffect } from 'react';
import './Homecontent.css';
import angle from '../Assets/angle.png';
import { motion } from 'framer-motion';
import arrowdown from '../Assets/arrowdown.png';
import power from '../Assets/power.png'
import { BsBehance, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import avatar from "../Assets/meavatar.png"
import wave from "../Assets/wave.svg"
import color from "../Assets/color.png"
import puzzel from "../Assets/puzzle.png"



// Define fade-in variant
const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, ease: 'easeOut' } }
};

export default function Homecontent() {


  return (

    
    <>
    <div className='allmain'>
<div className='maincontent'><img src={wave} className='wave'></img>&nbsp; Hey , I am &nbsp; <button className='maincontentbtn name'>Manuri Rasara</button></div>

<div className='maincontent'>I am a &nbsp;<button className='maincontentbtn ui'>&nbsp;UI/UX Designer</button>&nbsp; &&nbsp; <button className='maincontentbtn web'>&nbsp;Web Developer&nbsp;</button>&nbsp;<img src={puzzel} className='wave'/> </div>


<div className='maincontent'><img src={color} className='wave'/>&nbsp;Also a &nbsp;<button className='maincontentbtn graphic'>&nbsp;Graphic Designer</button></div>
</div>

{/* 
        <div className='allicons'>
        <span className='icon'><BsLinkedin fontSize={12} color='rgb(173, 169, 169)'/><a href='https://www.linkedin.com/in/manurirasarahewage'>&nbsp;&nbsp;/Linkedin</a></span><span className='icon'><BsGithub fontSize={12} color='rgb(173, 169, 169)'/><a href='https://github.com/Manuri-Rasara'>&nbsp;&nbsp;/Github</a></span><span className='icon'><BsBehance fontSize={12} color='rgb(173, 169, 169)' /><a href='https://www.behance.net/manuri'>&nbsp;&nbsp;/Behance</a></span><span className='icon'><BsInstagram fontSize={12} color='rgb(173, 169, 169)'/> <a href='https://www.instagram.com/manuri_rasara?igsh=MXRjdDNwN3I0N2prbA=='>&nbsp;&nbsp;/Instargrame</a></span>
        </div> */}

       

       
       
   

    
  

    
     
    </>
  );
}
