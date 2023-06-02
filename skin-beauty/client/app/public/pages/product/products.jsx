import React, { useState, useEffect } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { Categories } from "../../../../../lib/collections/categories";
import { Brands } from "../../../../../lib/collections/brands.js";
import { SkinTypes } from "../../../../../lib/collections/skinTypes";
import { Products } from "../../../../../lib/collections/products.js";
import {
  Pagination,
  PaginationItem,
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

export const ProductsPage = () => {
  const categories = useTracker(() => Categories.find({}).fetch());
  const brands = useTracker(() => Brands.find({}).fetch());
  const skinTypes = useTracker(() => SkinTypes.find({}).fetch());
  const products = useTracker(() => Products.find({}).fetch());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
  const [productCards, setProductCards] = useState(products);

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
      // handleFilter();
    }
  };
  const handleFilter = () => {
    const filteredProducts = products.filter((product) => {
      const isCategoryMatch = selectedCategories.includes(product.category);
      const isBrandMatch = selectedBrands.includes(product.brand);
      const isSkinTypeMatch = selectedSkinTypes.includes(product.skinType);
      return (
        (selectedCategories.length === 0 || isCategoryMatch) &&
        (selectedBrands.length === 0 || isBrandMatch) &&
        (selectedSkinTypes.length === 0 || isSkinTypeMatch)
      );
    });

    setProductCards(filteredProducts);
  };

  const handleClearFilter = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSkinTypes([]);
    setProductCards(products);
  };

  const perPage = 16;
  const totalPages = Math.ceil(productCards.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = Math.min(startIndex + perPage, productCards.length);
  const displayedProducts = productCards.slice(startIndex, endIndex);

  const handlePageChange = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Box className="productSection">
      <Box className="categoryContainer col-sm-3">
        <Typography variant="h4">KATEGORİ</Typography>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body1">Ürün Çeşidi</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List className="categoryList">
              {categories.map((category) => (
                <ListItem
                  key={category._id}
                  onClick={() =>
                    handleCheckboxClick(category.title, "categories")
                  }
                >
                  <Checkbox
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
                    checked={selectedSkinTypes.includes(skinType.title)}
                  />
                  <Typography variant="body1">{skinType.title}</Typography>
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>

        <Typography variant="h4">Marka</Typography>
        <Box className="brandContainer">
          <List className="brandList">
            {brands.map((brand) => (
              <ListItem
                key={brand._id}
                button
                onClick={() => handleCheckboxClick(brand.title, "brands")}
              >
                <Checkbox checked={selectedBrands.includes(brand.title)} />
                <Typography variant="body1">{brand.title}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="filterButtons">
          <Button variant="contained" color="primary" onClick={handleFilter}>
            Filtrele
          </Button>
          <Button variant="contained" onClick={handleClearFilter}>
            Filtreleri Temizle
          </Button>
        </Box>
      </Box>

      <Box className="productContainer col-sm-9">
        <Typography variant="h4">Ürünler</Typography>
        {displayedProducts.map((product) => (
          <Box className="productCard" key={product._id}>
            <a href={`/Product/${product._id}`}>
              <img src={product.imageLink} alt="" />
              <Typography variant="h2">{product.name}</Typography>

              <Typography variant="h2" style={{ color: "#e9ccb1" }}>
                {product.brand}
              </Typography>
            </a>
          </Box>
        ))}
        <Pagination
          className="pagination"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              component={item.page === currentPage ? "div" : "button"}
              disabled={item.page === currentPage}
              {...item}
            />
          )}
          nextIconButtonProps={{ disabled: currentPage === totalPages }}
          prevIconButtonProps={{ disabled: currentPage === 1 }}
          siblingCount={1}
          boundaryCount={1}
          showFirstButton
          showLastButton
          size="large"
        />
      </Box>
    </Box>
  );
};
