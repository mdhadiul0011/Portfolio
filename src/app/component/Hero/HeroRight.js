import Image from 'next/image';
import React, { lazy } from 'react'
import HeroImage from '../../../image/hero.webp'

const HeroRight = () => {
  return (
    <div className='hero-img' width={450} height={450} loading='lazy'>
      <Image src={HeroImage}/>
    </div>
  )
}

export default HeroRight;
