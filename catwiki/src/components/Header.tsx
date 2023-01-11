import React, { useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { Cat } from '../interfaces/cat-interface'

import catImage from '../images/CatwikiLogo.svg'
import BreedDetails from './BreedDetails'

type BreedProps = {
    data: Cat[]
}

type CatProps = {
  catBreed: Cat
}



const API_KEY = 'YCa8tb/mF7pU3yBPcezkgQ==UF4eQaRRWs93WBkH'
axios.defaults.headers.common['X-Api-Key'] = API_KEY

const Header = ({ data}:BreedProps) => {

    const [searchedValue, setSearchedValue] = useState('')
    const [searchedBreed, setSearchedBreed] = useState<Cat | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchedValue(event.target.value)
    }

    const fetchSearchedValue = async() => {
       
        try {

            const res = await axios.get(`https://api.api-ninjas.com/v1/cats?name=${searchedValue}`)
            const data = res.data
            console.log(data)
            setSearchedBreed(data)
            console.log(searchedBreed)
            setSearchedValue('')
            
        } catch (error) {
            console.log(error)
        }
    } 
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        fetchSearchedValue()
    }

    useEffect(()=>{
        fetchSearchedValue()

    },[])
    

    

  return (
    <div className='header w-full rounded-t-2xl bg-hero h-48 md:h-96 bg-cover bg-center bg-no-repeat
        flex flex-col pl-8 md:pl-16'>
        <div className='image-section mt-3 md:mt-14'>
            <img className='invert contrast-[150%]' src={catImage} alt='cat' />
        </div>

        <div className='more-about-cat w-40 md:w-56 mt-3'>
            <h3 className='more text-xs md:text-sm text-white font-medium leading-4'>Get to know more about your cat breed</h3>
        </div>

        <div className='form-section'>
            <form onSubmit={handleFormSubmit} className='relative mt-4 md:mt-8'>
                <input className='bg-white rounded-[59px] w-32 md:w-60 placeholder:text-brownish placeholder:ml-2 
                    placeholder:text-sm px-3 p-1 md:px-4 md:py-2 focus:outline-0'
                    type='text' placeholder='search'
                    value={searchedValue}
                    onChange={handleChange}
                />
                <button type='submit' className="search-icon" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 absolute text-brownish
                        top-2 left-24 md:left-52 z-50 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0
                            0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </button>

            </form>
        </div>

        {searchedBreed &&
            <div className='searched-breed-result rounded-md bg-red-400 w-2/5 absolute inset-2/4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                    stroke="currentColor" className="w-6 h-6 text-brownish">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <BreedDetails catBreed={searchedBreed}/>
            </div>
        }
        

     
    </div>
  )
}

export default Header