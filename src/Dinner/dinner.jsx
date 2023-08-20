import React from 'react'
import "./dinner.css"
const Dinner = ({dinner}) => {
  return (
    <div className='main'>
            <div className='main-part'>
              <p className='header'>Dinner</p>
            {dinner.map((menu)=>
                <div className='page-control' key={Date.now()}>
                <img src={menu.src} alt='pictures'/>
                <p className='name'>{menu.name}</p>
                <p>{menu.price}</p>
                </div>)}
                
          </div>
    </div>
  )
}

export default Dinner