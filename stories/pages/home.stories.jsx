import React from "react";

import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const WithoutName = {};

export const WithName = { args: { name: "John Doe" } };
