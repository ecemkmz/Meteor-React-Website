import React from "react";
import axios from "axios";
import { useEffect, useState} from "react";
import Product from "./product.jsx"
import data from "../../../../imports/api/products.json"

export const Products = () => {
  // const [products, setProducts] = useState([]);
  // const fetchProducts = async () => {
  //   const response = await axios.get(
  //     "https://makeup-api.herokuapp.com/api/v1/products.json"
  //   );
  //   setProducts(response.data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  const handleChevronClick = (i) => {
    const panel = document.querySelectorAll(".panelBody");
    panel[i].classList.toggle("active");
    panel[i].style.display = panel[i].classList.contains("active") ? "flex" : "none";
    };

  const handleFilterClick = (e) => {
    console.log(e);
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
                  <i className="bx bx-chevron-down" /> Cilt Tipi
                </a>
              </h6>
            </div>
            <div id="skinType" className="panelContainer">
              <div className="panelBody">
                <ul>
                  <li>
                    <a
                      className="filter"
                      data-id={1}
                      href="#"
                      onClick={handleFilterClick}
                    >
                      Yağlı Cilt{" "}
                    </a>
                  </li>
                  <li>
                    <a className="filter" href="#" onClick={handleFilterClick}>
                      Kuru Cilt{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="filter"
                      href="#"
                      onClick={handleFilterClick}
                    >
                      Hassas Cilt{" "}
                    </a>
                  </li>
                  <li>
                    <a className="filter" href="#" onClick={handleFilterClick}>
                      Atopik Cilt
                    </a>
                  </li>
                  <li>
                    <a className="filter" href="#" onClick={handleFilterClick}>
                      Olgun Cilt{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="categoryDefault">
            <div className="categoryHeading">
              <h6 className="categoryTitle">
                <a onClick={() => handleChevronClick(1)}>
                  <i className="bx bx-chevron-down" />
                  Ürün Çeşidi
                </a>
              </h6>
            </div>
            <div id="prodType" className="panelContainer">
              <div className="panelBody">
                <ul>
                  <li>
                    <a
                      className="filter"
                      name="Temizleme Jeli"
                      href="#"
                      onClick={handleFilterClick}
                    >
                      Temizleme Jeli{" "}
                    </a>
                  </li>
                  <li>
                    <a className="filter" href="#" onClick={handleFilterClick}>
                      Nemlendirici{" "}
                    </a>
                  </li>
                  <li>
                    <a className="filter" href="#" onClick={handleFilterClick}>
                      Maske{" "}
                    </a>
                  </li>
                  <li>
                    <a className="filter" href="#" onClick={handleFilterClick}>
                    Güneş Kremi{" "}
                      </a>
                    </li>
                    <li>
                      <a className="filter" href="#">
                        Serum{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
     
          <h4>Marka</h4>
          <div className="brandContainer">
            <ul className="brandList"> {data.products.map((product) => {
              return (
                <li>
                <a href="#">{product.brand}</a>
              </li>
              )
              
            })};
            
            </ul>
          </div>
          {/*/brands_products*/}
        </div>
        <div className="productContainer">
        {data.products.map((product) => {
  return <Product {...product} key={product.id} />;
})}
        </div>
      </div>

    );
}