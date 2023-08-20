import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div className='container'>
         <div className='navbar'>
            <div className='logo'>
                <p className='logo'>Madu Resturant</p>
            </div>

            <div className='flex-colm'>
                <a href='#'>Home</a>
                <a href='#'>Menu</a>
                <a href='#'>Chef</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
            </div>

            <button id='my-btn'>+91212112121</button>
         </div>
    </div>
  )
}

export default Navbar