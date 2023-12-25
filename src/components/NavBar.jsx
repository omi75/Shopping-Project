import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

function NavBar() {
  const {cart}=useSelector((state)=>state);
  return (
    <div className='bg-slate-900'>
      <nav className='flex justify-between items-center max-w-6xl h-20 mx-auto'>
        <NavLink to={'/'}>
          <img className='ml-5 h-14' src="./logo.png" alt="logo"/>
        </NavLink>

        <section className='flex text-slate-100 items-center space-x-6 font-medium mr-5'>
          <NavLink to={'/'}>
            <span className='text-xl'>Home</span>
          </NavLink>

          <NavLink to={'/cart'}>
            <div className='text-2xl relative'>
              <FaShoppingCart />
              
              {cart.length > 0 && 
              <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5
              flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>     
              
              }
            </div>
          </NavLink>
        </section>
      </nav>
    </div>
  )
}

export default NavBar