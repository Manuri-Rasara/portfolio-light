import React, { useEffect, useState } from 'react';
import './Project1.css'
import card1project from '../Assets/card1project.png'
import card2project from '../Assets/card2project.png'
import card3project from '../Assets/card3project.png'
import card4project from '../Assets/card4project.png'
import card5project from '../Assets/card5project.png'
import card6project from '../Assets/card6project.png'
import {FaArrowRight} from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';
import card1 from "../Assets/newcard1.png"
import card2 from "../Assets/newcard2.png"

export default function Project1() {

    const [show, setShow] = useState(false); // State to control visibility

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            // Show content only when scrolling down
            if (currentScrollTop > 0) {
                setShow(true); // Show content when scrolled down
            } else {
                setShow(false); // Hide content at the top of the page
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
    }, []);
  return (
<>
<div className="title1">PROJECTS</div>
    <div className='allcards'>
        <div className='card1'>
            <div><img src={card1}></img><div className='card1content'>💻  Portfolio Website Template</div></div>
        </div>

        <div className='card2'>
            <div><img src={card2}></img><div className='card2content'>💻  Company Website Template</div></div>
        </div>
    </div>
    
    </>
  )
}
