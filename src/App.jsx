import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './Pages/Homepage';
import Projectspage from './Pages/Projectspage';

function App() {

  return (
    <div className='appcontainer'>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/projects' element={<Projectspage />} />

        </Routes>
      </Router>
      
    </div>
  )
}

export default App
