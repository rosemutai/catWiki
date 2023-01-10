import React, { useEffect, useRef, useState} from 'react'
import axios from 'axios'
import { Cat } from '../interfaces/cat-interface'

import catImage from '../images/CatwikiLogo.svg'

type BreedProps = {
    data: Cat[]
}

const Header = ({ data}: BreedProps) => {

    const inputSearchRef = useRef<HTMLInputElement>(null)
    const [searchedValue, setSearchedValue] = useState('')
    const [suggestions, setSuggestions] = useState<Cat[]>([])
    const [selectedSuggestion, setSelectedSuggestion] = useState("")
    const [allBreeds, setAllBreeds] = useState<string[]>([])
    const [activeSuggestion, setActiveSuggestion] = useState(0)

    useEffect(() => {
        if (inputSearchRef.current) {
            inputSearchRef.current.focus()
        }
    }, [])


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) : void =>{
        if(event.target.value !== ''){
            const filteredSuggestions = data.filter((itemData) => {
                const value = event.target.value.toLowerCase()
                const name = itemData.name.toLowerCase()

                return value && name.startsWith(value) && name !== value
            })
            setSearchedValue(event.target.value)
            setSuggestions(filteredSuggestions)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if(event.key === 'ArrowDown' && activeSuggestion < suggestions.length){
            setActiveSuggestion(activeSuggestion + 1)
        }else if(event.key === 'ArrowUp' && activeSuggestion > suggestions.length){
            setActiveSuggestion(activeSuggestion - 1)
        }else if(event.key === 'Enter'){
            setSearchedValue(suggestions[activeSuggestion - 1].name)
            setSelectedSuggestion(suggestions[activeSuggestion - 1].name)
            setSuggestions([])
            setActiveSuggestion(0)
        }
    }

    const handleClick = (value: string) => {
        setSelectedSuggestion(value)
        setSearchedValue(value)
        setSuggestions([])
        setActiveSuggestion(0)
    
    }

 
    const API_KEY = 'live_XfAiOo58GwKnnNLeHCHjQemCTHAoIF0eeNSqeqMNtErSrB84NCeUeRUo79pPj0ro'
    axios.defaults.headers.common['x-api-key'] = API_KEY

    

    

    const displayAllBreeds = async () =>{
    try {

        const response = await axios.get('https://api.thecatapi.com/v1/breeds')
        const data = await response.data
        setAllBreeds(data)
        console.log(data)
        
      } catch (error) {
        console.log(error)
      }
    
   }

   

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
            <div className='relative mt-4 md:mt-8'>
                <input className='bg-white rounded-[59px] w-32 md:w-60 placeholder:text-brownish placeholder:ml-2 
                    placeholder:text-sm px-3 p-1 md:px-4 md:py-2 focus:outline-0'
                    type='text' placeholder='search'
                    value={searchedValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={inputSearchRef}
                />
                <button  className="search-icon" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" className="md:w-6 w-4 h-4 md:h-6 absolute text-brownish
                        top-2 left-24 md:left-52 z-50 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0
                            0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                </button>
                <div className='searched-items'>
                    {/* {allBreeds && allBreeds.filter((onebreed) => {
                        return(
                            onebreed.includes(searchParam) 
                            
                        )}
                       

                    )} */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default Header