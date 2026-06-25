const express = require("express");
const path = require("path");
const { connectDatabase } = require("./config/database");

const app = express();
const PORT = process.env.PORT || 3000;

// Чтение JSON из формы заявки.
app.use(express.json());

// Статический фронтенд из папки public.
app.use(express.static(path.join(__dirname, "..", "public")));

// Маршруты API.
const mainRoutes = require("./routes/main.routes");
app.use("/", mainRoutes);

const startServer = async () => {
  await connectDatabase();

  app.listen(PORT, () => {
    console.log(`Server running: http://localhost:${PORT}`);
  });
};

startServer();
