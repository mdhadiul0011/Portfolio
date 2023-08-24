import React, { Children } from 'react'
import Footer from './Footer/Footer'
import Menubar from './Navbar/Menubar'

const Layout = ({children}) => {
  return (
    <div>
      <Menubar/>
        {children}
      <Footer/>
    </div>
  )
}

export default Layout
