import React, { useState } from "react";
import Product from "./product.jsx";
// import data from "../../../../imports/api/products.json";

export const Products = () => {
  const handleChevronClick = (i) => {
    const panel = document.querySelectorAll(".panelBody");
    panel[i].classList.toggle("active");
    panel[i].style.display = panel[i].classList.contains("active")
      ? "flex"
      : "none";
  };
  // const [selectedBrand, setSelectedBrand] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedSkinType, setSelectedSkinType] = useState("");

  // const brands = Array.from(
  //   new Set(data.products.map((product) => product.brand))
  // );
  // const categories = Array.from(
  //   new Set(data.products.map((product) => product.category))
  // );
  // const skinTypes = Array.from(
  //   new Set(data.products.map((product) => product.skin_type))
  // );

  // const handleFilterSelect = (brand, category, skinType) => {
  //   setSelectedBrand(brand);
  //   setSelectedCategory(category);
  //   setSelectedSkinType(skinType);
  // };

  // const filteredProducts = data.products.filter(
  //   (product) =>
  //     (!selectedBrand || product.brand === selectedBrand) &&
  //     (!selectedCategory || product.category === selectedCategory) &&
  //     (!selectedSkinType || product.skin_type === selectedSkinType)
  // );

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
                 {/* {categories.map((category) => (
                    <li> 
                      <a
                        href="#"
                        className={
                          selectedCategory === category ? "selected" : ""
                        }
                        onClick={() => handleFilterSelect("", category, "")}
                      >
                        {category}
                      </a>
                    </li>
                  ))} */}
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
                  {/* {skinTypes.map((skinType) => (
                    <li>
                      <a
                        href="#"
                        className={
                          selectedSkinType === skinType ? "selected" : ""
                        }
                        onClick={() => handleFilterSelect("", "", skinType)}
                      >
                        {skinType}
                      </a>
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h4>Marka</h4>
        <div className="brandContainer">
          <ul className="brandList">
            {/* {brands.map((brand) => (
              <li>
                <a
                  href="#"
                  className={selectedBrand === brand ? "selected" : ""}
                  onClick={() => handleFilterSelect(brand, "", "")}
                >
                  {brand}
                </a>
              </li>
            ))} */}
          </ul>
        </div>
        {/*/brands_products*/}
      </div>
      <div className="productContainer">
        {/* {filteredProducts.map((product) => (
          <Product {...product} key={product.id} />
        ))} */}
      </div>
    </div>
  );
};
