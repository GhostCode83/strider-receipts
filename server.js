const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(cors());

const PORT = 8000;
const HOST = "localhost";
const API_SERVICE_URL = "https://doc.strider.tech/content/receipts.json";

app.use(morgan("dev"));

app.get("/info", (req, res, next) => {
  res.send("This is a proxy service which proxies to the strider API.");
});

app.use("", (req, res, next) => {
  if (req.headers.authorization) {
    next();
  } else {
    res.sendStatus(403);
  }
});

app.use(
  "/json_placeholder",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/json_placeholder`]: "",
    },
  })
);

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
