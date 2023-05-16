Migrations.add({
    version: 4,
    name:"Created SkinType",
    up: function() {
        const skinTypes = JSON.parse(Assets.getText('seeds/skinTypes.json'));
        skinTypes.forEach((skinType) => {
            SkinTypes.insert(skinType);
            });
    }
  });