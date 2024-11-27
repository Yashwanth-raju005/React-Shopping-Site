/* eslint-disable no-unused-vars */
import React from 'react'
import {mobileData} from '../data/mobiles'

const Mobiles = () => {
  return (
    <>

    <div>
      <h1 className='heading'>Mobiles</h1>
    </div>
    <div className='proSection'>
        {mobileData.map((item)=>{
            return(
                <>
                
                <div key={Math.random()} className='mimg'>
                    <img src={item.image} alt="" className='proImg' />
                </div>
                </>
            )
        })}
    </div>
    </>
  )
}

export default Mobiles