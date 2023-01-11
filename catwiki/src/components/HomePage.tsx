import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Breeds from './Breeds'
import Footer from './Footer'
import Header from './Header'
import WhyHaveACat from './WhyHaveACat'

const HomePage = () => {

  const [allBreeds, setAllBreeds] = useState([])


  return (
    <div className=' md:w-128 md:mx-auto'>
        <Header data={allBreeds} />
        <Breeds data={allBreeds} />
        <WhyHaveACat />
        <Footer />
    </div>
  )
}

export default HomePage