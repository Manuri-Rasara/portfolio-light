import React, { useEffect, useState } from 'react';
import './Technologies.css';
import HTML from '../Assets/HTML.png';
import CSS from '../Assets/CSS.png';
import JS from '../Assets/JS.png';
import PHP from '../Assets/PHP.png';
import Java from '../Assets/Java.png';
import MySql from '../Assets/MySql.png';
import Node from '../Assets/Node.png';
import Ract from '../Assets/React.png';
import Ai from '../Assets/Ai.png';
import Ps from '../Assets/PS.png';
import figma from '../Assets/figma.png';
import Xd from '../Assets/Xd.png';
import c from '../Assets/c.png';
import cs from '../Assets/cs.png';
import py from '../Assets/py.png';
import tcss from '../Assets/tcss.png';
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';
import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from 'react-icons/fa';
import { FaC } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { CgShapeCircle } from 'react-icons/cg';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiCsharp, SiSpringboot } from 'react-icons/si';
import { FiFigma } from 'react-icons/fi';

export default function Technologies() {
    const [show, setShow] = useState(false); // Initially set to false to hide content
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Track if the screen is small

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

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768); // Change 768 to the desired max width
        };

        // Add scroll and resize event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        // Initial check for screen size
        handleResize();

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
            window.removeEventListener('resize', handleResize); // Cleanup
        };
    }, []);
    return (<>
        <div className='title'>TECH STACK</div>
       <div className='maintech'>
        
            <div className='tech'><FaHtml5/></div>
            <div className='tech'><FaCss3/></div>
            <div className='tech'><RiTailwindCssFill/></div>
            <div className='tech'><FaJs/></div>
            <div className='tech'><FaJava/></div>
            <div className='tech'><FaPhp/></div>
            <div className='tech'><FaNodeJs/></div>
            <div className='tech'><FaReact/></div>
            <div className='tech'><FaC/></div>
            <div className='tech'><FaPython/></div>
           
            <div className='tech'><SiCsharp/></div>
            <div className='tech'><SiSpringboot/></div>
            <div className='tech'><FiFigma/></div>
            <div className='tech'><SiAdobexd/></div>
            <div className='tech'><SiAdobeillustrator/></div>
            <div className='tech'><SiAdobephotoshop/></div>

           </div>
       </>
    );
}
