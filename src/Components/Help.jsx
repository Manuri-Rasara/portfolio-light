import './Help.css';
import { color, motion } from 'framer-motion';
import { fadeIn } from './Variants';
import React, { useEffect, useRef, useState } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { FaQuoteLeft } from 'react-icons/fa6';

export default function Help() {
    const [show, setShow] = useState(false); // Initially set to false to hide content
    const helpRef = useRef(null); // Create a ref for the Help component

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Set show state based on intersection
                if (entry.isIntersecting) {
                    setShow(true); // Show content when in view
                } else {
                    setShow(false); // Hide content when out of view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is in view
        );

        if (helpRef.current) {
            observer.observe(helpRef.current); // Observe the Help component
        }

        return () => {
            if (helpRef.current) {
                observer.unobserve(helpRef.current); // Cleanup observer
            }
        };
    }, []);

    return (
        <div className='all'>
        <div className='help'> {/* Attach ref to the main div */}
        <h3><FaQuoteLeft      color='#000000' fontSize="48px"/></h3>
        <div className='quote'>I enjoy solving challenges in both web development and design, where I bring software solutions to life and create engaging UI/UX designs. My goal is to seamlessly combine functionality and aesthetics, delivering experiences that are both visually appealing and highly user-friendly.</div>
        <p><br></br>- Manuri - </p>
        </div></div>
    );
}
