import React from 'react'
import { AiFillLinkedin , AiFillGithub , AiFillFolder } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className='footer-container'>
        <p>
            2025 MonkeyType All rights reserved
        </p>
        <p className='icons'>
            <AiFillFolder />
            <AiFillLinkedin />
            <AiFillGithub />
        </p>
    </div>
     
  )
}

export default Footer