/* eslint-disable no-unused-vars */
import React from 'react'
import { watchData } from '../data/watch'
const Watch = () => {
  return (
    <>
    <div>
        <h1 className='heading'>Watch</h1>

    </div>
    <div className='proSection'>
        {watchData.map((item)=>{
            return(
                <div key={Math.random()} className='mimg'>
                    <img src={item.image} alt="" />
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Watch