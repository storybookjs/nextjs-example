import React from "react";
import Index from "../../pages/index";
export default {
  title: "Pages/Index",
  component: Index,
};

export const WithoutUser = {};

export const WithUser = {
  args: {
    name: "John Doe",
  },
};
