let users = []; // пока храним в памяти

exports.createUser = (data) => {
    const newUser = {
        id: Date.now(),
        ...data
    };

    users.push(newUser);

    return newUser;
};

exports.getUsers = () => {
    return users;
};