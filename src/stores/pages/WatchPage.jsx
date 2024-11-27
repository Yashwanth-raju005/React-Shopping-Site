/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { watchData } from "../data/watch";
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
  watchData:watchData.filter((orange)=>selectedProduct.includes(orange.company))

  return (
    <>
      <NavBar />

      <div className="full-page">
        <div className="pro-selected">
          {watchData.map((watch) => {
            return (
              <div key={Math.random()} className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(watch.company)}
                    onChange={() => companyHandler(watch.company)}
                  />
                  <p>{watch.brand}</p>
                </label>
              </div>
            );
          })}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div key={Math.random()}>
                <Link to={`/watches/${item.id}`}>
                  <div className="pageImg" key={Math.random()}>
                    <img src={item.image} alt="" />
                  </div>
                </Link>

                <div className="proModel">
                  {item.company}, {item.model}
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
