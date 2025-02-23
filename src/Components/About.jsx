import React, { useEffect, useState } from 'react';
import './About.css';
 import user from '../Assets/manuri-me.png'; // Comment out the image import if not needed
import { motion } from 'framer-motion';
import { fadeIn } from './Variants';

export default function About() {
   
    return (
        <>

            <p className='abouttitle'> ABOUT</p>
           <div className='about'>

         
        <p>
            In 2019, I started selling unique illustrations on Shutterstock and social media
            never realizing that this spark of creativity would lead me to the world of web development.
            What began as a passion for design evolved into a relentless pursuit of building seamless, 
            interactive digital experiences.
        </p><br/><br/>
        
        <h3>🚀 A Self-Taught Journey of Growth</h3><br/>
        <p>
            I didn't wait for opportunities; I created them. My curiosity pushed me beyond HTML, CSS, and JavaScript, 
            diving deep into frameworks like <strong>React</strong> and <strong>Angular</strong>, mastering backend technologies, 
            and embracing the art of UI/UX design. Every challenge became a lesson, every failure a stepping stone.
        </p><br/><br/>
        
        <h3>🎨 Where Art Meets Innovation</h3><br/>
        <p>
            Web development is more than just writing code—it's about crafting experiences, solving real-world problems, 
            and making technology more intuitive. I blend artistic creativity with technical expertise to build 
            solutions that don’t just function but inspire.
        </p><br/><br/>
        
        <h3>🔥 Future-Focused & Fearless</h3><br/>
        <p>
            The journey of a developer never stops. I’m constantly learning, adapting, and pushing boundaries 
            to stay ahead in this ever-evolving tech world. Whether it's building scalable applications, 
            designing intuitive interfaces, or exploring the latest innovations, I thrive on the challenge 
            of creating something extraordinary.
        </p>

        <div className='allbox'>
            <div className='box'>GCE Advanced Level<br/><p>Z-score - 1.3585</p></div>
            <div className='box'>BCS Degreee in Computer Science <br/> <p>University of Ruhuna</p></div>
        </div>
                    </div> 
            
        </>
    );
}
