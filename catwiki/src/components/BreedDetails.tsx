import React from 'react'
import { Cat } from '../interfaces/cat-interface'

type CatProps = {
  catBreed: Cat
}

const BreedDetails = ({catBreed}: CatProps) => {
  return (
    <div className='cat-details w-full rounded-2xl bg-light-grey'>
      <img className='w-16 h-16 rounded-full' src={catBreed.image_link} alt={catBreed.name} />
      <div className="details text-center text-brownish">
          <h3>{catBreed.name}</h3>
          <p>{catBreed.origin}</p>

      </div>
      
        
    </div>
  )
}

export default BreedDetails