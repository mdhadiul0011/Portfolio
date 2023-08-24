import FooterList from '@/data/CopyrightData';
import { Open_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const OpenSans = Open_Sans({
    subsets: ['latin'],
  })

const Copyright = () => {
  return (
    <div className='copyright-footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 mx-auto'>
                    <div className='copyright-list'>
                        <ul className='d-flex justify-content-center gap-4'>
                            {
                                FooterList.map((item, i)=> (
                                    <li>
                                        <Link href={item.Link} className={OpenSans.className}>{item.title}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Copyright;
