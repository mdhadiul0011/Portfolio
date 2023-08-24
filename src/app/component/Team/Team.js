import React from 'react'
import TeamLeft from './TeamLeft'
import TeamRight from './TeamRight'
import { DM_Sans } from 'next/font/google'

const DmSans = DM_Sans({
    subsets : ['latin'],
    weight: ['400']
  })

const Team = () => {
  return (
    <div className='team'>
      <div className='container'>
        <div className='row'>
            <div className='col-lg-6'>
                <div>
                    <TeamLeft/>
                </div>
            </div>
            <div className='col-lg-6'>
                <div>
                    <TeamRight/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team
