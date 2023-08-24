'use client'
import TeamData from '@/data/TeamData';
import { DM_Sans, Grechen_Fuemen, Open_Sans } from 'next/font/google';
import { AiOutlineCheck } from 'react-icons/ai';
import {motion} from 'framer-motion';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import React, { useState } from 'react';


const Grechen = Grechen_Fuemen({
  subsets : ['latin'],
  weight: ['400']
})

const DmSans = DM_Sans({
  subsets : ['latin'],
  weight: ['400']
})

const OpenSans = Open_Sans({
  subsets: ['latin'],
})


const TeamRight = () => {
  const [counterOn, setCounterOn] = useState(false)


  return (
    <div className='team-right'>
      <h2 className={DmSans.className}>We <span>Run</span>  Agency <span>Smartly</span> With Our <span>Team</span> Member.</h2>
      <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
      {
        TeamData.map((item, i)=> (
          <h3 className={DmSans.className}><AiOutlineCheck className='icon'/>{item.title}</h3>
        ))
      }
      <motion.button          
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        className={OpenSans.className}>
          Explore Me
      </motion.button>

      <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
        <div className='counterup-start d-flex gap-5'>
          <div className='countup'>
            {
              counterOn && <h4 className={Grechen.className}><CountUp start={0} end={30} duration={2} delay={0}/>+</h4>
            }
            <p className={DmSans.className}>Team Members</p>
          </div>
          <div className='countup'>
            {
              counterOn && <h4 className={Grechen.className}><CountUp start={0} end={150} duration={2} delay={0}/></h4>
            }
            <p className={DmSans.className}>Completed Projects</p>
          </div>
          <div className='countup'>
            {
              counterOn && <h4 className={Grechen.className}><CountUp start={0} end={50} duration={2} delay={0}/>+</h4>
            }
            <p className={DmSans.className}>Satisfied Clients</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  )
}

export default TeamRight;
