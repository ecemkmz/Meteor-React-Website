import { Products } from "../../../lib/collections/products";

Meteor.methods({
    filterProducts(selectedCategories, selectedBrands, selectedSkinTypes) {
        const filters = {};
    
        if (selectedCategories.length > 0) {
          filters.category = { $in: selectedCategories };
        }
    
        if (selectedBrands.length > 0) {
          filters.brand = { $in: selectedBrands };
        }
    
        if (selectedSkinTypes.length > 0) {
          filters.skinType = { $in: selectedSkinTypes };
        }
    
        const filteredProducts = Products.find(filters).fetch();
        return filteredProducts;
    },
  });