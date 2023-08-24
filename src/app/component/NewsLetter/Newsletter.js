import { DM_Sans, Open_Sans } from 'next/font/google'
import { HiArrowRight } from 'react-icons/hi';
import React from 'react'

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

  const OpenSans = Open_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

const Newsletter = () => {
  return (
    <div className='Newsletter'>
      <div className='container'>
        <div className='newletter-part'>
            <div className='row'>
                <div className='col-lg-6'>
                    <div className='text-part'>
                        <h2 className={DmSans.className}>Subscirbe to Our Newsletter</h2>
                        <p className={OpenSans.className}>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='email-part d-flex justify-content-center'>
                        <input className='Email-input' placeholder='Email'/>
                        <div className='icon'>
                            <HiArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter;
