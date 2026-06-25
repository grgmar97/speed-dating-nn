const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

// тестовый маршрут
router.get("/", userController.home);

// регистрация участника
router.post("/register", userController.register);

// список пользователей
router.get("/users", userController.listUsers);

module.exports = router;