const userService = require("../services/user.service");

// просто проверка сервера
exports.home = (req, res) => {
    res.send("Speed Dating NN API работает 🚀");
};

// регистрация пользователя
exports.register = async (req, res) => {
    const { name, age, city, interests } = req.body;

    if (!name || !age || !city) {
        return res.status(400).json({
            error: "name, age, city обязательны"
        });
    }

    try {
        const user = await userService.createUser({
            name,
            age,
            city,
            interests
        });

        res.status(201).json({
            message: "Пользователь зарегистрирован",
            user
        });
    } catch (error) {
        res.status(500).json({
            error: "Не удалось сохранить пользователя",
            details: error.message
        });
    }
};

exports.listUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({
            error: "Не удалось получить пользователей",
            details: error.message
        });
    }
};