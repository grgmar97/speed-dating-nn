const userService = require("../services/user.service");

// Проверка сервера.
exports.home = (req, res) => {
  res.send("Speed Dating NN API работает");
};

// Регистрация участника.
exports.register = async (req, res) => {
  const { name, age, city, contact, about, interests } = req.body;

  if (!name || !age || !city || !contact) {
    return res.status(400).json({
      error: "Имя, возраст, город и контакты обязательны",
    });
  }

  try {
    const user = await userService.createUser({
      name,
      age,
      city,
      contact,
      about,
      interests,
    });

    res.status(201).json({
      message: "Заявка отправлена",
      user,
    });
  } catch (error) {
    res.status(500).json({
      error: "Не удалось сохранить заявку",
      details: error.message,
    });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: "Не удалось получить заявки",
      details: error.message,
    });
  }
};
