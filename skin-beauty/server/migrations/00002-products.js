
Migrations.add({
    version: 2,
    name:"Created Product",
    up: function() {
        const products = JSON.parse(Assets.getText('seeds/products.json'));
        products.forEach((product) => {
            Products.insert(product);
            });
    }
  });
  