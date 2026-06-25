const User = require('../models/user.model');

exports.createUser = async (data) => {
    const newUser = new User(data);
    await newUser.save();
    return newUser;
};

exports.getUsers = async () => {
    return User.find().sort({ createdAt: -1 });
};