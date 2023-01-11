import React from 'react';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='app w-full min-h-screen pt-8 px-8'>
     
      <Navbar />
      <HomePage />
      
    </div>
  );
}

export default App;
