import Image from 'next/image'
import React from 'react'
import LeftImg from '../../../image/team.png'
import { DM_Sans } from 'next/font/google'

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

const TeamLeft = () => {
  return (
    <div className='team-left'>
      <Image src={LeftImg}/>
      <div className='year'>
        <h3 className={DmSans.className}>5+</h3>
        <h3 className={DmSans.className}>Year</h3>
        <p className={DmSans.className}>Experience</p>
      </div>
    </div>
  )
}

export default TeamLeft
