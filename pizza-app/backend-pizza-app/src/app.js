import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
const products = [
  {
    _id: {
      $oid: "5eee651f739f8c674fd736ee",
    },
    name: "Margherita",
    image: "D:GitHub\react-learnpizza-app\backend-pizza-apppublicimages",
    price: "250",
    size: "small",
  },
  {
    _id: {
      $oid: "5eee6671a27a66807cf2bea3",
    },
    name: "Marinara",
    image: "pizza.png",
    price: "300",
    size: "medium",
  },
  {
    _id: {
      $oid: "5eee6692a27a66807cf2bea4",
    },
    name: "Carbonara",
    image: "pizza.png",
    price: "200",
    size: "small",
  },
  {
    _id: {
      $oid: "5eee66a5a27a66807cf2bea5",
    },
    name: "Americana",
    image: "pizza.png",
    price: "500",
    size: "large",
  },
  {
    _id: {
      $oid: "5eee66c4a27a66807cf2bea6",
    },
    name: "Chicken Mushroom",
    image: "pizza.png",
    price: "350",
    size: "medium",
  },
  {
    _id: {
      $oid: "5eee66cfa27a66807cf2bea7",
    },
    name: "Paneer pizza",
    image: "pizza.png",
    price: "200",
    size: "small",
  },
  {
    _id: {
      $oid: "5eee66eea27a66807cf2bea8",
    },
    name: "Vegies pizza",
    image: "pizza.png",
    price: "600",
    size: "large",
  },
  {
    _id: {
      $oid: "5eee6717a27a66807cf2bea9",
    },
    name: "Pepperoni",
    image: "pizza.png",
    price: "500",
    size: "medium",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to our web application!!");
});

app.get("/api/products", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json({ products });
});

export default app;
