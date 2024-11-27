/* eslint-disable no-unused-vars */
import React from 'react'
import { computerData } from '../data/computers'
const Computers = () => {
  return (
      <div className='proSection'>
        <h1 className='heading'>Laptops</h1>
        {computerData.map((item)=>{
            return (
                <div key={Math.random()} className='mimg'>
                    <img src={item.image} alt="" className='proImg' />

                </div>
            )
        })}
        
    </div>
  )
}

export default Computers