import React from "react";
import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
  // default args
  args: {
    name: "John Doe",
  },
};

export const HomePage = (args) => <Home {...args} />;
// story-specific args
HomePage.args = { name: "John Dough" };
