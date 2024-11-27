/* eslint-disable no-unused-vars */
import React from 'react'
import { furnitureData } from '../data/furniture'
const Furniture = () => {
  return (
    <div className='proSection'>
        <h1 className='heading'>Furniture</h1>
        {furnitureData.map((item)=>{
            return(
                <div key={Math.random()} className='mimg'>
                    <img src={item.image} alt="" className='proImg' />
                </div>
            )
        })}
    </div>
  )
}

export default Furniture