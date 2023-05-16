Migrations.add({
    version: 5,
    name:"Created BlogTexts",
    up: function() {
        const blogTexts = JSON.parse(Assets.getText('seeds/blogTexts.json'));
        blogTexts.forEach((blogText) => {
            BlogTexts.insert(blogText);
            });
    }
  });