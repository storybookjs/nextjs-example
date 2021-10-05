import "../styles/globals.css";
import * as NextImage from "next/image";
import { setupWorker, rest } from "msw";

// https://mswjs.io/docs/getting-started/integrate/browser#start-worker
if (typeof global.process === "undefined") {
  const worker = setupWorker();
  worker.start(
    rest.get("https://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Dough" }));
    })
  );

  // assign for params
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
