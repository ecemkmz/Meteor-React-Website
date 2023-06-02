import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../../../../../lib/collections/products.js";
import {useTracker} from 'meteor/react-meteor-data';

export const ProductDetail = () => {
  const { productId } = useParams();
  Meteor.subscribe('products');
  const product = useTracker(() => Products.findOne(productId));

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="productDetail">
      <section className="productInfo col-sm-4">
        <img src={product.imageLink} alt="" />
      </section>
      <section className="col-sm-7">
      <h2>{product.category}//{product.brand}//{product.name}</h2>
         <div className="productMore"> 

          İçerik: {product.ingredients}
         </div>
      </section>
    </div>
  );
};
