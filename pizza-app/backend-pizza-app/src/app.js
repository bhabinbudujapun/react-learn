import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

// Load environment variables
dotenv.config();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());

app.use("/assets", express.static("public"));

const localhost = process.env.LOCAL_HOST;

const products = [
  {
    $_id: "5eee651f739f8c674fd736ee",
    name: "Margherita",
    image: "Margherita.png",
    price: "250",
    size: "small",
  },
  {
    $_id: "5eee6671a27a66807cf2bea3",
    name: "Marinara",
    image: "Chicken_Mushroom.webp",
    price: "300",
    size: "medium",
  },
  {
    $_id: "5eee6692a27a66807cf2bea4",
    name: "Carbonara",
    image: "Vegies.jpg",
    price: "200",
    size: "small",
  },
  {
    $_id: "5eee66a5a27a66807cf2bea5",
    name: "Americana",
    image: "Paneer.webp",
    price: "500",
    size: "large",
  },
  {
    $_id: "5eee66c4a27a66807cf2bea6",
    name: "Chicken Mushroom",
    image: "Chicken_Mushroom.webp",
    price: "350",
    size: "medium",
  },
  {
    $_id: "5eee66cfa27a66807cf2bea7",
    name: "Paneer pizza",
    image: "Vegies.jpg",
    price: "200",
    size: "small",
  },
  {
    $_id: "5eee66eea27a66807cf2bea8",
    name: "Vegies pizza",
    image: "Margherita.png",
    price: "600",
    size: "large",
  },
  {
    $_id: "5eee6717a27a66807cf2bea9",
    name: "Pepperoni",
    image: "Chicken_Mushroom.webp",
    price: "500",
    size: "medium",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to our web application!!");
});

app.get("/api/products", (req, res) => {
  const baseUrl = `${localhost}/assets/images/`;

  const updatedProducts = products.map((product) => ({
    ...product,
    image: `${baseUrl}${product.image}`,
  }));

  res.setHeader("Content-Type", "application/json");
  res.json({ products: updatedProducts });
});

app.post("/api/products", (req, res) => {
  const baseUrl = `${localhost}/assets/images/`;

  const filteredProducts = products.filter((product) => {
    return req.body.ids.includes(product.$_id);
  });

  const updatedProducts = filteredProducts.map((product) => ({
    ...product,
    image: `${baseUrl}${product.image}`,
  }));

  res.json(updatedProducts);
});

app.get("/api/product/:_id", (req, res) => {
  const { _id } = req.params;
  const product = products.find((p) => p.$_id === _id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const baseUrl = `${localhost}/assets/images/`;

  const updatedProducts = {
    ...product,
    image: `${baseUrl}${product.image}`,
  };

  res.json(updatedProducts);
});

export default app;
