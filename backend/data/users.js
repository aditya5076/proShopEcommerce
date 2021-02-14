const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@doe.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@doe.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

module.exports = users;
