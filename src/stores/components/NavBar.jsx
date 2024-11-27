/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../Context/cartContext'

const NavBar = () => {


    const {cartItems}=useCart()

  return (
    <>
    <div className="navSection">
        <Link to={'/'}>
        <div className="title">
            D-MART
        </div>
        </Link>
        <div className="search">
            <input type='text' placeholder='Search' className='inp'/>
        </div>
        <div className="user">
            <div className="user-detail">
                SignIn/SignUp
            </div>
            <Link to={'/cart'}>
            <div className="cart">
                Cart


                <span>{cartItems.length}</span>
            </div>
            </Link>
        </div>
    </div>
    <div className="subMenu">
            <ul>
                <Link to={'/mobiles'}>
                <li>Mobiles</li>
                </Link>
                <Link to={'/computer'}>
                <li>Computers</li>
                </Link>
                <Link to={'/watches'}>
                <li>Watches</li>
                </Link>
                <Link to={'/mens'}>
                <li>Mens Wear</li>
                </Link>
                <Link to={'/women'}>
                <li>Women Wear</li>
                </Link>
                <Link to={'/ac'}>
                <li>Ac</li>
                </Link>
                <Link to={'/tv'}>
                <li>TV</li>
                </Link>
                <Link to={'/furniture'}>
                <li>Furniture</li>
                </Link>
                <Link to={'/books'} >
                <li>Books</li>
                </Link>
                <Link to={'/toys'}>
                <li>Toys</li>
                </Link>
                <Link to={'/gaming'}>
                <li>Gaming</li>
                </Link>
                <Link to={'/kitchen'}>
                <li>Kitchen</li>
                </Link>
            </ul>
        </div>
    </>
    
  )
}

export default NavBar