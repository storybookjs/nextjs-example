import React from "react";
import Home, { getServerSideProps } from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const WithoutName = {};

export const WithName = { args: { name: "John Doe" } };

export const WithNameFromGSSP = {
  render: (args, { loaded: props }) => <Home {...args} {...props} />,
};
WithNameFromGSSP.loaders = [
  async () => {
    let data = await getServerSideProps();

    return data.props;
  },
];
