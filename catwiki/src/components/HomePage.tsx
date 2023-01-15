import React, { useState} from 'react'
import Breeds from './Breeds'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import WhyHaveACat from './WhyHaveACat'

const HomePage = () => {

  const [allBreeds, setAllBreeds] = useState([])


  return (
    <div className=' md:w-128 md:mx-auto'>
        <Navbar />
        <Header data={allBreeds} />
        <Breeds data={allBreeds} />
        <WhyHaveACat />
        <Footer />
    </div>
  )
}

export default HomePage