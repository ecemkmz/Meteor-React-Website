import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Categories } from "../../../../../lib/collections/categories";
import { Brands } from "../../../../../lib/collections/brands.js";
import { SkinTypes } from "../../../../../lib/collections/skinTypes";
import { Products } from "../../../../../lib/collections/products.js";
import {
  List,
  ListItem,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { PaginationComponent } from "../../components/pagination/pagination";

export const ProductsPage = () => {
  Meteor.subscribe('categories');
  Meteor.subscribe('brands');
  Meteor.subscribe('skinTypes');
  Meteor.subscribe('products');
  const categories = useTracker(() => Categories.find({}).fetch());
  const brands = useTracker(() => Brands.find({}).fetch());
  const skinTypes = useTracker(() => SkinTypes.find({}).fetch());
  const products = useTracker(() => Products.find({}).fetch());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
  const [productCards, setProductCards] = useState(products);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const perPage = 16;

  useEffect(() => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    setDisplayedProducts(productCards.slice(startIndex, endIndex));
  }, [currentPage, productCards]);

  const handleCheckboxClick = (itemId, type) => {
    if (type === "categories") {
      setSelectedCategories((prevSelectedCategories) => {
        if (prevSelectedCategories.includes(itemId)) {
          return prevSelectedCategories.filter((id) => id !== itemId);
        } else {
          return [...prevSelectedCategories, itemId];
        }
      });
    } else if (type === "brands") {
      setSelectedBrands((prevSelectedBrands) => {
        if (prevSelectedBrands.includes(itemId)) {
          return prevSelectedBrands.filter((id) => id !== itemId);
        } else {
          return [...prevSelectedBrands, itemId];
        }
      });
    } else if (type === "skinTypes") {
      setSelectedSkinTypes((prevSelectedSkinTypes) => {
        if (prevSelectedSkinTypes.includes(itemId)) {
          return prevSelectedSkinTypes.filter((id) => id !== itemId);
        } else {
          return [...prevSelectedSkinTypes, itemId];
        }
      });
    }
  };

  const handleFilter = () => {
    Meteor.call(
      'filterProducts',
      selectedCategories,
      selectedBrands,
      selectedSkinTypes,
      (error, result) => {
        if (error) {
          console.log(error);
        } else {
          setProductCards(result);
          setCurrentPage(1);
        }
      }
    );
  };

  const handleClearFilter = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSkinTypes([]);
    setProductCards(products);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(productCards.length / perPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box className="productSection">
      <Box className="categoryContainer col-sm-3">
        <Typography variant="h4">-KATEGORİ-</Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">Ürün Çeşidi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="categoryList">
              {categories.map((category) => (
                <ListItem
                  key={category._id}
                  button
                  onClick={() =>
                    handleCheckboxClick(category.title, "categories")
                  }
                >
                  <Checkbox
                    className="checkbox"
                    checked={selectedCategories.includes(category.title)}
                  />
                  <Typography variant="body1">{category.title}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">Cilt Tipi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="skinTypeList">
              {skinTypes.map((skinType) => (
                <ListItem
                  key={skinType._id}
                  button
                  onClick={() =>
                    handleCheckboxClick(skinType.title, "skinTypes")
                  }
                >
                  <Checkbox
                    className="checkbox"
                    checked={selectedSkinTypes.includes(skinType.title)}
                  />
                  <Typography variant="body1">{skinType.title}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Typography variant="h4">-Marka-</Typography>
        <Box className="brandContainer">
          <List className="brandList">
            {brands.map((brand) => (
              <ListItem
                key={brand._id}
                button
                onClick={() => handleCheckboxClick(brand.title, "brands")}
              >
                <Checkbox
                  className="checkbox"
                  checked={selectedBrands.includes(brand.title)}
                />
                <Typography variant="body1">{brand.title}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="filterButtons">
          <Button onClick={handleFilter}>FİLTRELE</Button>
          <Button onClick={handleClearFilter}>FİLTRELERİ TEMİZLE</Button>
        </Box>
      </Box>

      <Box className="productContainer col-sm-9">
        <Typography variant="h4">-Ürünler-</Typography>
        {displayedProducts.map((product) => (
          <Box className="productCard" key={product._id}>
            <a href={`/Product/${product._id}`}>
              <img src={product.imageLink} alt="" />
              <Typography variant="h2">{product.name}</Typography>
              <Typography variant="h2" style={{ color: "#bb6464" }}>
                {product.brand}
              </Typography>
            </a>
          </Box>
        ))}
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};
