/* eslint-disable no-unused-vars */
import React from 'react'
import {womanData} from '../data/woman'

const Women = () => {
  return (
    <div >
        <div>
            <h1 className='heading'>Women</h1>
        </div>
        <div className='proSection'>
            {womanData.map((item)=>{
                return(
                    <div key={Math.random()} className='mimg'>
                        <img src={item.image} alt="" className='m-im'/>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Women