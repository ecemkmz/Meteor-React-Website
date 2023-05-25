import { SkinTypeQuestions } from "../../lib/collections/skinTypeQuestions";
Migrations.add({
  version: 6,
  name: "Created SkinTypeQuestions",
  up: function () {
    const skinTypeQuestions = JSON.parse(
      Assets.getText("seeds/skinTypeQuestions.json")
    );
    skinTypeQuestions.forEach((skinTypeQuestion) => {
      SkinTypeQuestions.insert(skinTypeQuestion);
    });
  },
});
