'use client'
import BlogData from '@/data/BlogData';
import ArrowRight from '@/svg/ArrowRight';
import React from 'react'
import Slider from "react-slick";
import { SlCalender } from 'react-icons/sl';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

const Blog = () => {
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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // prevArrow: <ArrowRight />,
        // nextArrow: <SampleNextArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
    <div className='blog'>
        <div className='container'>
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
                once: true,
            }}
            className='blog-head'>
                <h2 className={DmSans.className}>Latest Blog</h2>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>
            </motion.div>
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
                className='blog-slider'>
                    <Slider {...settings}>
                        {
                            BlogData.map((item, i)=> (
                                <div className='blog-item' key={i}>
                                    <div className='blog-img'>{item.img}</div>
                                    <div className='calender align-items-center'><SlCalender/> {item.date}</div>
                                    <div className={DmSans.className + " " + 'title'}>{item.title}</div>
                                    <Link href='#' className={DmSans.className + " " + 'url'}>{item.url}</Link>
                                </div>
                            ))
                        }
                    </Slider>
            </motion.div>
        </div>
    </div>
  )
}

export default Blog
