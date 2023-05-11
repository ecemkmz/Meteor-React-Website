import React from "react";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import "boxicons";

import { PublicLayout } from "./public/routes";

Meteor.startup(() => {
  const container = document.getElementById("react-target");
  const root = createRoot(container);
  root.render(<PublicLayout />);
});
