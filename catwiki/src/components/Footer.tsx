import React from 'react'
// import catImage from '../images/catwikiLogo.svg'

const Footer = () => {
  return (
    <div className='footer mt-3 px-8 md:px-24  bg-black flex md:flex-row flex-col 
        items-start md:items-center justify-beween w-full rounded-t-2xl'>
        <div className='image-section md:mt-14'>
            {/* <img className='invert contrast-[150%]' src={catImage} alt='cat' /> */}
        </div>

        <div className="username md:ml-auto">
            <p className='text-white text-xs md:text-sm '>&#169; kitty.com devchallenges-design</p>
        </div>
    </div>
  )
}

export default Footer