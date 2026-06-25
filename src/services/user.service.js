const mongoose = require("mongoose");
const User = require("../models/user.model");

const fallbackUsers = [];

exports.createUser = async (data) => {
  if (mongoose.connection.readyState !== 1) {
    const fallbackUser = {
      _id: `local-${Date.now()}`,
      ...data,
      createdAt: new Date(),
      storage: "memory",
    };

    fallbackUsers.unshift(fallbackUser);
    return fallbackUser;
  }

  const newUser = new User(data);
  await newUser.save();
  return newUser;
};

exports.getUsers = async () => {
  if (mongoose.connection.readyState !== 1) {
    return fallbackUsers;
  }

  return User.find().sort({ createdAt: -1 });
};
