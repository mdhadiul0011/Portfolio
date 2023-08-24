'use client'
import Logo from '@/svg/Logo'
import React from 'react'
import { Open_Sans } from 'next/font/google'
import { ResourceData, ServiceData } from './footerdata'
import Link from 'next/link'
import { BsFillSendFill } from 'react-icons/bs';
import { DM_Sans } from 'next/font/google';
import Facebook from '@/svg/Facebook';
import Instagram from '@/svg/Instagram';
import Pinterest from '@/svg/Pinterest';
import Twitter from '@/svg/Twitter';
import {motion} from 'framer-motion';
import Copyright from './Copyright'

const DmSans = DM_Sans({
  subsets : ['latin'],
  weight: ['400']
})

const OpenSans = Open_Sans({
  subsets: ['latin'],
})

const Footer = () => {
  return (
<div>
<div className='Footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='parra-01'>
              <div className='img'>
                <Logo/>
              </div>
              <p className={OpenSans.className}>
                There are many variations of passages of available, but the majority have suffered.
              </p>
            </div>
          </div>
          
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='parra-02'>
              <h2>
                Service
              </h2>
              {
                ServiceData.map((item, i)=>(
                  <Link href={item.Link} className={DmSans.className}>{item.title}</Link>
                ))
              }
            </div>
          </div>
                    
          <div className='col-lg-3 col-sm-6 col-md-6'>
            <div className='parra-02'>
              <h2>
                Resources
              </h2>
              {
                ResourceData.map((item, i)=>(
                  <Link href={item.Link} className={DmSans.className}>{item.title}</Link>
                ))
              }
            </div>
          </div>

          <div className='col-lg-3'>
            <div className='Subscribe'>
              <h2 className={DmSans.className}>
                NewsLetter
              </h2>
              <p>
                Subscribe for our upcoming latest address and resources
              </p>

              <div className='newslatter-form d-flex align-item-center justify-content-between'>
                <input className={DmSans.className} type='email' placeholder='email'/>
                <button><BsFillSendFill/></button>
              </div>
              <div className='footer-icon d-flex gap-3 mt-3'>
                <motion.div   initial={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: .2 },
                    }} className='icons'>
                  <Facebook/>
                </motion.div>
                <motion.div initial={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: .2 },
                    }} className='icons'>
                  <Instagram/>
                </motion.div>
                <motion.div initial={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: .2 },
                    }} className='icons'>
                  <Pinterest/>
                </motion.div>
                <motion.div initial={{ opacity: 1 }}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: .2 },
                    }} className='icons'>
                  <Twitter/>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Copyright/>
</div>
  )
}

export default Footer
