import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'


function App() {
  return (
    <div className=''>
        <NavBar/>

        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default App