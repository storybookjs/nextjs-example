import React from "react";
import Home, { getServerSideProps } from "../../pages/index";
import { rest } from "msw";

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
  ({ parameters }) => {
    const worker = parameters.msw;
    worker.resetHandlers();

    worker.use(
      rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
        return res(ctx.json({ name: "John Dough" }));
      })
    );
  },
  async () => {
    let data = await getServerSideProps();

    return data.props;
  },
];
