import express from "express";

const app = express();

app.get("/", () => {
  res.send("Welcome to our web application!!");
});

app.get("/api/products");

export default app;
