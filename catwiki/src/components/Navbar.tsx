import React from 'react'
import logo from '../images/CatwikiLogo.svg'

const Navbar = () => {
  return (
    <div className='navbar md:w-128 md:pl-5  md:mt-0 -mt-3'>
        <div className='logo'>
            <img src={logo} className='my-5' alt='cat logo' />
        </div>
    </div>
  )
}

export default Navbar