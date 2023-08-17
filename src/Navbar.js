import React from 'react'
import { Navbar } from 'flowbite-react';
import './App.css';

function DefaultNavbar() {
  return (
    <>
    <Navbar fluid className='fixed top-0 w-full p-5 font-oswald font-extralight bg-mint-green z-10 shadow-md my-auto dark:bg-dark-green'>
        <Navbar.Brand>
            <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-700 dark:text- tracking-widest">LO</span>
        </Navbar.Brand>
        <Navbar.Toggle className='hover:bg-deep-green hover:text-white border-none rounded-none'/>
        <Navbar.Collapse>
            <Navbar.Link href="#" className='hover:bg-deep-green hover:text-white border-none'>
                <p className='text-lg hover:text-white'>
                    ABOUT
                </p>
            </Navbar.Link>
            <Navbar.Link href="#" className='hover:bg-deep-green hover:text-white border-none'>
                <p className='text-lg hover:text-white'>
                    ARTICLES
                </p>
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default DefaultNavbar;