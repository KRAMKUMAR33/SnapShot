import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Birds from './components/Birds'
import Mountain from './components/mountain'
import Beach from './components/beach'
import Food from './components/food'

function App() {


  return (
    <>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Mountain/>}/>
    <Route path='/birds' element={<Birds/>}/>
    <Route path='/beach' element={<Beach/>}/>
    <Route path='/food' element={<Food/>}/>
  </Routes>

    </>
  )
}

export default App
