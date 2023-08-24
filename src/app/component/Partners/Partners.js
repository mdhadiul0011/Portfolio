'use client'
import PartnersData from '@/data/PartnersData';
import { DM_Sans, Jost } from 'next/font/google'
import React from 'react'
import Slider from "react-slick";
import { motion } from 'framer-motion';

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

  const jost = Jost({
    subsets : ['latin'],
    weight: ['400']
  })

const Partners = () => {
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

    const Automotion = {
        hidden: {
            x: 10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
    <div className='partners'>
        <div className='container'>
            <motion.div 
            initial = 'hidden'
            whileInView='visible'
            variants={Automotion}
            transition={{
                staggerChildren: 0.2,
                duration: 0.4,
                ease: 'easeInOut'
            }}
            viewport={{
                once: true
            }} 
            className='partners-head-text'>
                <h2 className={DmSans.className}>Reputed Partners</h2>
            </motion.div>
            <div className='p-slider'>
                <Slider {...settings}>
                    {
                        PartnersData.map((item, i)=> (
                            <motion.div 
                            initial = 'hidden'
                            whileInView='visible'
                            variants={Animation}
                            transition={{
                                staggerChildren: 0.2,
                                duration: 0.4,
                                ease: 'easeInOut'
                            }}
                            viewport={{
                                once: true
                            }}  
                            className='p-items'>
                                <div className='p-img d-flex justify-content-center'>{item.img}</div>
                                <div className={jost.className + ' ' + 'p-text'}>{item.text}</div>
                            </motion.div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Partners
