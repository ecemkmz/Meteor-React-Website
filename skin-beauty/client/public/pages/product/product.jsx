import React from "react";

export default function Product(product) {
    return (
        <div>
          <div className="productCard">
            <img src={product.image_link} alt="" />
            <h2>{product.name}</h2>
            <h2>{product.brand}</h2>
          </div>
        </div>
      );
}