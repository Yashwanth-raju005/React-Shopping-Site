/* eslint-disable no-unused-vars */
import React from 'react'
import NavBar from '../components/NavBar'
import { furnitureData } from '../data/furniture'
const FurniturePage = () => {
  return (
    <>
    <NavBar/>
    <div className='pageSection'>
        {furnitureData.map((item)=>{
            return(
                <div key={Math.random()}>
                    <div className='pageImg' key={Math.random()}>
                    <img src={item.image} alt="" />
                    </div>
                    <div className="proModel">
                        {item.company},  {item.model}
                    </div>
                </div>
            )
        })}

    </div>
    </>
  )
}

export default FurniturePage