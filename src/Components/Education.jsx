import React, { useEffect, useState } from 'react';
import './Education.css'
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function Time() {

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
    
    <div className="component-wrapper">

    

    </div></>
  )
}
