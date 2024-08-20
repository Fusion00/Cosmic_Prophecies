import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './Home';
import About from './About';
import Underconstruction from './Underconstruction';
import Booking from './Booking';

const App = () => {
  return (
    <div>
      <div>
      <main>
        <BrowserRouter basename='Cosmic_Prophecies'>
        <header><Appbar/></header>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/404' element={<Underconstruction/>}/>
            <Route path='/Bookings' element={<Booking/>}/>
          </Routes>
          <footer><Footer/></footer>
        </BrowserRouter>
      </main>
      </div>
      
      
      
    
    
  </div>

  )
}

export default App