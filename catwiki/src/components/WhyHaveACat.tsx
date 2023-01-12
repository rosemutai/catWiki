import React from 'react'
import image1 from '../images/image 1.png'
import image2 from '../images/image 2.png'
import image3 from '../images/image 3.png'


const WhyHaveACat = () => {
  return (
    <div className='reasons-for-cat md:flex md:justify-between md:px-24 md:mt-12 '>
        <div className="left md:w-1/2 md:flex md:flex-col">
            <hr className='border-b-brownish w-8 border-2 border-t-white border-x-white
                mt-2 md:mb-3'/>

             <h2 className='why-cat-title text-brownish text-3xl font-bold w-72 my-2'>
                Why should you have a cat
            </h2>

            <p className='why-cat-description text-brownish text-sm md:text-xs font-normal w-64 md:w-72 my-8'>
               Having a cat around you can actually trigger the release of calming chemicals
                in your body which lower your stress and anxiety levels
            </p>

            <div>
                <a href='https://en.wikipedia.org/wiki/Cat' className='hover:text-md hover:text-brownish
                       hover:border-b-brownish  hover:transition-all 
                     text-brownish/60 font-semibold text-sm flex justify-between my-4'>READ MORE
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                        stroke="currentColor" className="w-4 h-4 mb-1 md:mb-0 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
                </a>
            </div>
        </div>
        <div className="right w-11/12 md:w-1/2 flex flex-wrap">
            <div className="image">
                <img src={image2} className='w-36 md:w-40' alt="cat1" />
            </div>

            <div className="image">
                <img src={image3} className='w-36 md:w-44 ml-2' alt="cat2" />
            </div>

            <div className="image">
                <img src={image1} className='w-36 md:w-52 md:-ml-6 -mt-32 md:-mt-44 lg:-mt-30'  alt="cat3" />
            </div>
        </div>
    </div>
  )
}

export default WhyHaveACat