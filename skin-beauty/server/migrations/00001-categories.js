Migrations.add({
  version: 1,
  name: "Created Category",
  up: function () {
    const categories = JSON.parse(Assets.getText("seeds/categories.json"));
    categories.forEach((category) => {
      Categories.insert(category);
    });
  },
});
