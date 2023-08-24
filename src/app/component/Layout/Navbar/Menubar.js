"use client"
import MenuData from '@/data/MenuData';
import Logo from '@/svg/Logo';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { DM_Sans } from 'next/font/google';
import { motion } from 'framer-motion';

const DmSans = DM_Sans({
  subsets : ['latin'],
  weight: ['500']
})

const Menubar = () => {

  const [showNav, setShowNav] = useState(false);

  useEffect(()=> {
    const handleScroll = ()=> {
      if(window.scrollY > 200){
        setShowNav(true)
      }else{
        setShowNav(false)
      }
    } 
    
    window.addEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div>
      <Navbar expand="lg" className={showNav ? "navbar stickynav" : 'navbar py-3'}>
        <Container>
          <Link href="#">
            <Logo/>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              {
                MenuData?.map((menu, i) => (
                  <Link className={DmSans.className + " " + "mx-2"} href={menu.url}>{menu.title}</Link>
                ))
              }
              
            </Nav>
            <motion.div
            whileHover={{scale: 1.07}}
            transition={{
                type: 'spring',
                stiffness: 200,
            }}>
              <button className={DmSans.className}>Contact Now</button>
            </motion.div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menubar
