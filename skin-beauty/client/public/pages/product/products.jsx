import React, { useState } from "react";
import Product from "./product.jsx";
import { useTracker } from 'meteor/react-meteor-data';
import { Categories  } from "../../../../lib/collections/categories";
import { Brands  } from "../../../../lib/collections/brands.js";
import {SkinTypes} from "../../../../lib/collections/skinTypes";
import {Products} from "../../../../lib/collections/products.js";

export const ProductsPage = () => {
  const categories = useTracker(() => Categories.find({}).fetch());
  const brands = useTracker(() => Brands.find({}).fetch());
  const skinTypes = useTracker(() => SkinTypes.find({}).fetch());
  const products = useTracker(() => Products.find({}).fetch());
  const handleChevronClick = (i) => {
    const panel = document.querySelectorAll(".panelBody");
    panel[i].classList.toggle("active");
    panel[i].style.display = panel[i].classList.contains("active")
      ? "flex"
      : "none";
  };
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSkinType, setSelectedSkinType] = useState("");

 
  const handleFilterSelect = (brand, category, skinType) => {
    setSelectedBrand(brand);
    setSelectedCategory(category);
    setSelectedSkinType(skinType);
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedSkinType || product.skin_type === selectedSkinType)
  );

  return (
    <div className="productSection">
      <div className="categoryContainer">
        <h4>Kategori</h4>
        <div className="skinTypeCategories">
          <div className="categoryDefault">
            <div className="categoryHeading">
              <h6 className="categoryTitle">
                <a onClick={() => handleChevronClick(0)}>
                  <i className="bx bx-chevron-down" />
                  Ürün Çeşidi
                </a>
              </h6>
            </div>
            <div id="skinType" className="panelContainer">
              <div className="panelBody">
                <ul className="categoryList">
                 {categories.map((category) => (
                    <li> 
                      <a
                        href="#"
                        className={
                          selectedCategory === category.title ? "selected" : ""
                        }
                        onClick={() => handleFilterSelect("", category.title, "")}
                      >
                        {category.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="categoryDefault">
            <div className="categoryHeading">
              <h6 className="categoryTitle">
                <a onClick={() => handleChevronClick(1)}>
                  <i className="bx bx-chevron-down" />
                  Cilt Tipi
                </a>
              </h6>
            </div>
            <div id="prodType" className="panelContainer">
              <div className="panelBody">
                <ul className="skinTypeList">
                  {skinTypes.map((skinType) => (
                    <li>
                      <a
                        href="#"
                        className={
                          selectedSkinType === skinType.title ? "selected" : ""
                        }
                        onClick={() => handleFilterSelect("", "", skinType.title)}
                      >
                        {skinType.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h4>Marka</h4>
        <div className="brandContainer">
          <ul className="brandList">
            {brands.map((brand) => (
              <li>
                <a
                  href="#"
                  className={selectedBrand === brand.title ? "selected" : ""}
                  onClick={() => handleFilterSelect(brand.title, "", "")}
                >
                  {brand.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="productContainer">
        {filteredProducts.map((product) => (
          <Product {...product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
