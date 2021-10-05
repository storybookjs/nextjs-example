import "../styles/globals.css";
import { setupWorker, rest } from "msw";

let msw;

if (typeof global.process === "undefined") {
  const worker = setupWorker(
    rest.get("http://localhost:3000/api/hello", (req, res, ctx) => {
      return res(ctx.json({ name: "John Doh" }));
    })
  );
  worker.start();

  msw = worker;
}

import * as NextImage from "next/image";

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
  msw,
};
