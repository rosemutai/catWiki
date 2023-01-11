import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Cat } from '../interfaces/cat-interface'

type BreedsProps = {
   data: Cat[]
}



const Breeds = ({data}:BreedsProps) => {

    const API_KEY = 'YCa8tb/mF7pU3yBPcezkgQ==UF4eQaRRWs93WBkH'
    axios.defaults.headers.common['X-Api-Key'] = API_KEY

  
    const [breeds, setBreeds] = useState<Cat[]>([])
    const displayAllBreeds = async () =>{

    axios.defaults.headers.common['X-Api-Key'] = 'YCa8tb/mF7pU3yBPcezkgQ==UF4eQaRRWs93WBkH'

        try {
            const response = await axios.get('https://api.api-ninjas.com/v1/cats?family_friendly=5')
            const data = await response.data
            setBreeds(data)
            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
    
  }

  useEffect(() => {
    displayAllBreeds()
   
  }, [])

  return (
    <div className='breeds w-full rounded-b-2xl h-[40rem] md:h-[32rem]  bg-light-grey px-8 md:px-16'>
        <h3 className="title text-brownish font-medium text-sm md:text-lg pt-6">The Most Friendly Breeds</h3>
        <hr className='border-b-brownish w-8 border-2 border-t-light-grey border-x-light-grey
            md:-mt-1 md:mb-3'/>
        
        <div className="66+ btn md:flex md:justify-between">
            <h2 className='discover-breeds-title text-brownish text-xl md:text-3xl font-extrabold md:my-0 my-10  md:w-72'>
                 Discover 50+ Cat Breeds
            </h2>
            <div className='btn'>
                <a href='https://en.wikipedia.org/wiki/Cat' className='hover:text-md hover:text-brownish
                    hover:border-b-2 hover:border-b-brownish  hover:transition-all md:ml-auto flex justify-beween text-brownish/60 font-thin 
                    md:font-semibold text-xs md:text-sm'>SEE MORE
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor" className="w-4 h-4 mb-1 md:mb-0 md:w-6 md:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>

                </a>
            </div>
            
        </div>
        
        <div className="cards-section flex justify-between flex-wrap md:flex-nowrap mdw-10/12 md:mt-4 mx-auto">
            {breeds  && breeds.map((breed, index) => {
                if(index < 4){
                return(
                     <div key={breed.name} className="card w-32 h-32 md:w-56 md:h-56 mb-16 md:mb-0 md:mr-2">
                        <img src={breed.image_link} className='w-full' alt="" />
                        <h4 className='cat-name text-brownish text-sm font-semibold  text-center'>{breed.name}</h4>
                    </div>
                )}
                })}
           

            

           

        </div>
    </div>
  )
}

export default Breeds