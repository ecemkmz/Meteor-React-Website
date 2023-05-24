import React, { useState } from "react";
import { useTracker } from 'meteor/react-meteor-data';
import { Categories } from "../../../../../lib/collections/categories";
import { Brands } from "../../../../../lib/collections/brands.js";
import { SkinTypes } from "../../../../../lib/collections/skinTypes";
import { Products } from "../../../../../lib/collections/products.js";

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
  const [currentPage, setCurrentPage] = useState(1);

  const handleFilterSelect = (brand, category, skinType) => {
    setSelectedBrand(brand);
    setSelectedCategory(category);
    setSelectedSkinType(skinType);
    setCurrentPage(1); 
  };

  const filteredProducts = products.filter(
    (product) =>
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedCategory || product.categoryId === selectedCategory) &&
      (!selectedSkinType || product.skinType === selectedSkinType)
  );

  const perPage = 20;
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
                          selectedCategory === category._id ? "selected" : ""
                        }
                        onClick={() => handleFilterSelect("", category._id, "")}
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
                          selectedSkinType === skinType.title? "selected" : ""
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
      {currentProducts.map((product) => (
  <div className="productCard" key={product._id}>
    <a href={`/Product/${product._id}`}>
      <img src={product.imageLink} alt="" />
      <h2>{product.name}</h2>
      <h2>{product.brand}</h2>
    </a>
  </div>
))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={pageNumber === currentPage ? "active" : ""}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </div>
  );
};
