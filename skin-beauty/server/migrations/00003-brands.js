import { Brands } from "../../lib/collections/brands";

Migrations.add({
  version: 3,
  name: "Created Brand",
  up: function () {
    const brands = JSON.parse(Assets.getText("seeds/brands.json"));
    brands.forEach((brand) => {
      Brands.insert(brand);
    });
  },
});
