const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: "admin",
    password: bcrypt.hashSync("admin123", 10)
  }
];

module.exports = users;