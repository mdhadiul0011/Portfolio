'use client'
import { DM_Sans, Open_Sans } from 'next/font/google'
import { motion } from 'framer-motion'
import Slider from "react-slick";
import React from 'react'
import Web from '@/svg/Web';
import AgencyData from '@/data/AgencyData';

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

  const OpenSans = Open_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

const Agency = () => {
    
  return (
    <div className='agency'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='agency-left-part'>
                        <h2 className={DmSans.className}>I <span>Run</span>  Agency <span>Smartly</span> With My <span >Team</span> Member.</h2>
                        <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                        <motion.button
                            whileHover={{scale: 1.07}}
                            transition={{
                                type: 'spring',
                                stiffness: 200,
                            }} className={OpenSans.className}>
                            Say Hello
                        </motion.button>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='agency-right-part'>
                            {
                                AgencyData.map((item, i) => (
                                    <div className='agency-items'>
                                        <div className='agency-items-left'>
                                            {item.icon}
                                        </div>
                                        <div className='agency-items-right'>
                                            <h3 className={DmSans.className}>{item.head}</h3>
                                            <p className={DmSans.className}>{item.title}</p>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agency
