'use client'
import React from 'react'
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';
import { motion } from 'framer-motion';


const Hero = () => {

    const Animation ={
        hidden: {
            y: -10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    };

  return (
    <motion.div
        initial= 'hidden'
        whileInView= 'visible'
        variants={Animation}
        transition={{
            staggerChildren: 0.2,
            duration: 0.4,
            ease: 'easeInOut',
        }}
        viewport={{
            once: true,
        }}
        className='hero'>
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-lg-6'>
                    <div className='left-part'>
                        <HeroLeft/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='right-part'>
                        <HeroRight/>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Hero;
