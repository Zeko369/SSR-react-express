import express from "express";
import ReactDOMServer from "react-dom/server";

// required because jsx gets converted into React.h()
import React from "react";

import { App } from "./app";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const rendered = ReactDOMServer.renderToString(<App />);
  res.send(`<div>${rendered}</div>`);
});

app.listen(PORT, () => {
  console.log(`Up on http://localhost:${PORT}`);
});
