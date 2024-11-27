/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { tvData } from "../data/tv";
const MobilePage = () => {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter((item) => item !== mango));
    } else {
      setSelectedProduct([...selectedProduct,mango]);
    }
  };

  const filteredProduct =selectedProduct.length===0?
  tvData:tvData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
    <>
      <NavBar />

      <div className="full-page">
        <div className="pro-selected">
          {tvData.map((phone) => {
            return (
              <div key={Math.random()} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(phone.brand)}
                    onChange={() => companyHandler(phone.brand)}
                  />
                  <p>{phone.brand}</p>
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={Math.random()}>
                <Link to={`/tv/${item.id}`}>
                  <div className="pageImg" key={Math.random()}>
                    <img src={item.image} alt="" />
                  </div>
                </Link>

                <div className="proModel">
                  {item.brand}, {item.model}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobilePage;
