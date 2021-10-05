import React from "react";

import Index from "../../pages/index";

export default {
  title: "Pages/Index",
  component: Index,
};

export function WithoutUser() {
  return <Index />;
}

export function WithUser() {
  return <Index name={"John Doe"} />;
}
