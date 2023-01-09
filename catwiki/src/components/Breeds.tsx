import React from 'react'
import image1 from '../images/image 1.png'


const Breeds = () => {
  return (
    <div className='breeds w-full rounded-b-2xl h-[40rem] md:h-[32rem]  bg-light-grey px-8 md:px-16'>
        <h3 className="title text-brownish font-medium text-sm md:text-lg pt-3">Most Searched Breeds</h3>
        <hr className='border-b-brownish w-8 border-2 border-t-light-grey border-x-light-grey
            md:-mt-1 md:mb-3'/>
        
        <div className="66+ btn md:flex md:justify-between">
            <h2 className='discover-breeds-title text-brownish text-xl md:text-3xl font-extrabold md:my-0 my-5  md:w-72'>
                66+ Breeds For you to discover
            </h2>
            <div className='btn'>
                <button className='md:ml-auto flex justify-beween text-brownish/60 font-thin 
                    md:font-semibold text-xs md:text-sm'>SEE MORE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" className="w-4 h-4 mb-1 md:mb-0 md:w-6 md:h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

                </button>
            </div>
            
        </div>
        
        <div className="cards-section flex justify-between flex-wrap md:flex-nowrap mdw-10/12 md:mt-4 mx-auto">
            <div className="card w-32 h-32 md:w-56 md:h-56 mb-16 md:mb-0 md:mr-2">
                <img src={image1} className='w-full' alt="" />
                <h4 className='cat-name text-brownish text-sm font-semibold  text-center'>Bengal</h4>
            </div>

             <div className="card w-32 h-32 md:w-56 md:h-56 mb-16 md:mb-0 md:mr-2">
                <img src={image1} className='w-full' alt="" />
                <h4 className='cat-name text-brownish text-sm font-semibold  text-center'>Savannah</h4>
            </div>

             <div className="card w-32 h-32 md:w-56 md:h-56 mt-8 md:mt-0 md:mr-2">
                <img src={image1} className='w-full' alt="" />
                <h4 className='cat-name text-brownish text-sm font-semibold text-center'>Norwegian Forest Cat</h4>
            </div>

             <div className="card w-32 h-32 md:w-56 md:h-56 mt-8 md:mt-0 md:mr-2">
                <img src={image1} className='w-full' alt="" />
                <h4 className='cat-name text-brownish text-sm font-semibold  text-center'>Selkirk Rex</h4>
            </div>

           

        </div>
    </div>
  )
}

export default Breeds