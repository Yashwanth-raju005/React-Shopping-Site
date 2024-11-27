/* eslint-disable no-unused-vars */
import React from 'react'
import {tvData} from '../data/tv'

const Tv = () => {
  return (
    <div>
        <div>
            <h1 className='heading'>TV</h1>
        </div>
        <div className='proSection'>
            {tvData.map((item)=>{
                
                    return(
                        <div key={Math.random()} className='mimg'>
                            <img src={item.image} alt="" />
                        </div>
                    )
                
            })}
        </div>
    </div>
  )
}

export default Tv