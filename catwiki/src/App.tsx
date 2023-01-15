import React from 'react';
import HomePage from './components/HomePage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app w-full min-h-screen pt-8 px-8'>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
      <HomePage />
      
    </div>
  );
}

export default App;
