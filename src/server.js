const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// чтобы читать JSON (для будущей регистрации)
app.use(express.json());

// подключаем фронтенд (папка public)
app.use(express.static(path.join(__dirname, "..", "public")));

// подключаем маршруты
const mainRoutes = require("./routes/main.routes");
app.use("/", mainRoutes);

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});