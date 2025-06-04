import app from "./src/app.js";

const startSever = async () => {
  const PORT = process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startSever();
