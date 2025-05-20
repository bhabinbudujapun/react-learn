import app from "./src/app.js";

const startSever = async () => {
  const PORT = 8000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

startSever();
