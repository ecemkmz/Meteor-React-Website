import { TestsContainer } from "../../lib/collections/testsContainer";

Migrations.add({
  version: 7,
  name: "Created TestsContainer",
  up: function () {
    const testsContainer = JSON.parse(
      Assets.getText("seeds/testsContainer.json")
    );
    testsContainer.forEach((testContainer) => {
      TestsContainer.insert(testContainer);
    });
  },
});
