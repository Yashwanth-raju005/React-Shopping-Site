/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { useCart } from "../stores/Context/cartContext";
import { womanData } from "../stores/data/woman";



const WomanSingle = () => {
  const { id } = useParams();

  const {addToCart,cartItems}=useCart()

  const product = womanData.find((item) => item.id === id);

  return (
    <>
      <NavBar />
      <div className="ind-section"> 
        <div className="ind-img">
          <img src={product.image} alt="" />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
          <div className="ind-des space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)} >Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default WomanSingle;
