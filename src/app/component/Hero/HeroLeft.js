'use client'
import React from 'react'
import { DM_Sans, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BsArrowUpRight } from 'react-icons/bs';
import Behance from '@/svg/Behance';
import Earth from '@/svg/Earth';
import Insta from '@/svg/Insta';


const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

  const OpenSans = Open_Sans({
    subsets: ['latin'],
  })

const HeroLeft = () => {
  return (
    <div className='heroleft-text'>
      <h1 className={DmSans.className}>
        <span>Creative</span> <span>and Work</span><span>Solution</span>
      </h1>
      <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>

      <div className='hero-btn'>
        <motion.button
            whileHover={{scale: 1.07}}
            transition={{
                type: 'spring',
                stiffness: 200,
            }}
        className={OpenSans.className}>Say Hello</motion.button>
        <Link href='#' className={DmSans.className}>My Work <BsArrowUpRight/></Link>
      </div>
      <div className='hero-social-icons d-flex gap-4'>
        <span className={DmSans.className}>Follow me on</span>
        <div className='social-icons d-flex gap-3'>
            <Link href='#'>
              <Behance/> 
            </Link>
            <Link href='#'>
              <Earth/> 
            </Link>
            <Link href='#'>
              <Insta/>
            </Link>
        </div>

      </div>
    </div>
  )
}

export default HeroLeft;
