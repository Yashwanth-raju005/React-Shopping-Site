/* eslint-disable no-unused-vars */
import React from 'react'
import {menData} from '../data/men'
const Men = () => {
  return (
    <>
    <div>
    <h1 className='heading'>Men</h1>
    </div>
    <div className='proSection'>
        {menData.map((item)=>{
            return(
                <div key={Math.random()} className='mimg'>
                    <img src={item.image} alt=""  className='m-im'/>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Men