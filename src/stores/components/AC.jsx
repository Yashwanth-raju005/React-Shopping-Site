/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import { acData } from '../data/ac'
const AC = () => {
  return (
    <div className='proSection'>
        <h1 className='heading'>AC</h1>
        {acData.map((item)=>{
            return(
                <div key={Math.random()} className='mimg'>
                    <img src={item.image} alt="" />
                </div>
            )
        })}
    </div>
  )
}

export default AC