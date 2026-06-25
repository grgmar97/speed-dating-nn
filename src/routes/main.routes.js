const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

// Проверка сервера.
router.get("/", userController.home);

// Регистрация участника.
router.post("/register", userController.register);

// Список заявок.
router.get("/users", userController.listUsers);

module.exports = router;
