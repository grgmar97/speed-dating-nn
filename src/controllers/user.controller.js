const userService = require("../services/user.service");

// просто проверка сервера
exports.home = (req, res) => {
    res.send("Speed Dating NN API работает 🚀");
};

// регистрация пользователя
exports.register = (req, res) => {
    const { name, age, city, interests } = req.body;

    if (!name || !age || !city) {
        return res.status(400).json({
            error: "name, age, city обязательны"
        });
    }

    const user = userService.createUser({
        name,
        age,
        city,
        interests
    });

    res.status(201).json({
        message: "Пользователь зарегистрирован",
        user
    });
};