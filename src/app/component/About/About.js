'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { DM_Sans } from 'next/font/google';
import AboutItemData from '@/data/AboutitemData';
import { Tilt } from 'react-tilt';

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

const About = () => {
  const [active, setActive] = useState(0);

  const handleClick = (i)=> {
    setActive(i)

  }

    const Animation ={
        hidden: {
            y: 10,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    };

    const defaultOptions = {
        reverse:        false, 
        max:            30, 
        perspective:    1000, 
        scale:          1, 
        speed:          1000, 
        transition:     true, 
        axis:           null, 
        reset:          true, 
        easing:         "cubic-bezier(.03,.98,.52,.99)",
      }

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
    className='about'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='about-left-part'>
                <div className='left-text'>
                    <h2 className={DmSans.className}>Failure is The Power that Gives <span>Success</span></h2>
                    </div>

                    <div className='about-item-box gap-2'>
                        {
                            AboutItemData.map((item, i) => (
                            <Tilt options={defaultOptions} >
                                <div className={active == i ? 'item active' : 'item'} onClick={()=> handleClick(i)}>
                                    <h2 className={DmSans.className}>{item.title}</h2>
                                    <p className={DmSans.className}>{item.parra}</p>
                                </div>
                            </Tilt>

                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='col-lg-6 me-auto'>
                <div className='about-right-part'>
                <div className='right-text'>
        <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised.</p>

        <motion.button whileHover={{scale: 1.07}}
              transition={{
                  type: 'spring',
                  stiffness: 200,
              }} className={DmSans.className}>
                Download Now
          </motion.button>
      </div>
      <div className='right-text-part'>
              {
                active == 0 ? 
                <div 
                className= "text-start"
                 >
                <h2 className={DmSans.className}>2017-Web Development</h2>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the   majority.</p>
                  <div
                  >
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className={DmSans.className}>
                      Visit Now
                    </motion.button>
                  </div>
              </div> 
              : ' '
              }

              {
                active == 1 ? 
                <div className='text-start'>
                <h2 className={DmSans.className}>2018-Digital Marketing</h2>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <div
                  >
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className={DmSans.className}>
                      Visit Now
                    </motion.button>
                  </div>
              </div> 
              : ' '
              }
              {
                active == 2 ? 
                <div className='text-start'>
                <h2 className={DmSans.className}>2015-Fronend Development</h2>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <div
                  >
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className={DmSans.className}>
                      Visit Now
                    </motion.button>
                  </div>
              </div> 
              : ' '
              }
                                         {
                active == 3 ? 
                <div className='text-start'>
                <h2 className={DmSans.className}>2015-MERN Stack Development</h2>
                <p className={DmSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                  <div
                  >
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.8 }}
                      className={DmSans.className}>
                      Visit Now
                    </motion.button>
                  </div>
              </div> 
              : ' '
              }
      </div>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About;
