const bcrypt = require("bcrypt");
const { User } = require("../models/user");
exports.register = (req, res) => {
  const { email, password, passwordConfirm, admin } = req.body;
  if (email == null || password == null) {
    res.json({ message: "Missing parameter username or password" });
  }
  User.findOne({
    attributes: ["email"],
    where: { email: email },
  }).then((userFound) => {
    if (!userFound) {
      if (password == passwordConfirm) {
        bcrypt.hash(password, 12, (error, passwordCrypted) => {
          let newUser = User.create({
            email: email,
            password: passwordCrypted,
            admin: admin,
          })
            .then((newUser) => {
              res.json({ userID: newUser.id });
            })
            .catch((err) => {
              res.json({
                message: "Something's wrong,Please contact an administrator",
              });
            });
        });
      } else {
        res.json({ message: "Password doesn't match" });
      }
    } else {
      res.json({ message: "User already exist" });
    }
  });
};
