import Home from "../../pages/index";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = (args) => <Home {...args} />;
HomePage.args = { name: "John Dough" };
