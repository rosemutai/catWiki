import React from 'react'
import Breeds from './Breeds'
import Footer from './Footer'
import Header from './Header'
import WhyHaveACat from './WhyHaveACat'

const HomePage = () => {
  return (
    <div className=' md:w-128 md:mx-auto'>
        <Header />
        <Breeds />
        <WhyHaveACat />
        <Footer />
    </div>
  )
}

export default HomePage