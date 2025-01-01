import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer className='text-center bg-neutral-600 bg-opacity-35 text-white py-2'>
    <div className='flex items-center justify-center gap-4'>
    <h5>Contact Us Using</h5>
    <h6>Email: movieo@gmail.com</h6>
    <h6>Mobile: 8989897766</h6>
    </div>
    <p className='text-sm'>Created By Dyanamic Coding with Mahesh</p>
   </footer>
  )
}

export default Footer
