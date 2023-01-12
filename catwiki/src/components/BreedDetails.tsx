import React from 'react'
import { Cat } from '../interfaces/cat-interface'

type CatProps = {
  catBreed: Cat
}

const BreedDetails = ({catBreed}: CatProps) => {
  return (
    <div className='cat-details w-full rounded-2xl text-brownish bg-light-grey'>
      <img className='w-20 h-20 rounded-full mx-auto' src={catBreed.image_link} alt={catBreed.name} />
      <div className="details text-center text-brownish">
          <h3><span className='font-bold'>Breed:</span> {catBreed.name}</h3>
          <p><span className='font-bold'>Origin:</span> {catBreed.origin}</p>
          <p><span className='font-bold'>Length:</span> {catBreed.length}</p>
          <p><span className='font-bold'>Life Expectancy:</span> {catBreed.max_life_expectancy} Years </p>
          <p><span className='font-bold'>Max-weight:</span> {catBreed.max_weight}</p>
          <p><span className='font-bold'>Family friendly' friendly:</span> {catBreed.family_friendly}</p>
          <p><span className='font-bold'>Other-Pets' friendly:</span> {catBreed.other_pets_friendly}</p>
          <p><span className='font-bold'>General Health:</span> {catBreed.general_health}</p>
          <p><span className='font-bold'>Playfullness:</span> {catBreed.playfulness}</p>
          <p><span className='font-bold'>Groomin:</span> {catBreed.grooming}</p>
          <p><span className='font-bold'>Shedding:</span> {catBreed.shedding}</p>
          <p><span className='font-bold'>Groomin:</span> {catBreed.grooming}</p>
          <p><span className='font-bold'>Intelligence:</span> {catBreed.intelligence}</p>

      </div>
      
        
    </div>
  )
}

export default BreedDetails