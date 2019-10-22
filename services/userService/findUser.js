const dataBase = require("../../dataBase").getInstance();

module.exports = async () => {
  const UserModel = dataBase.getModel("User");

  const allUsers = await UserModel.findAll({
    attributes: ["id", "name", "email"]
  });

  return allUsers;
};
