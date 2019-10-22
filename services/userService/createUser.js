const dataBase = require("../../dataBase").getInstance();

module.exports = async UserToCreate => {
  const UserModel = dataBase.getModel("User");

  const user = await UserModel.create(UserToCreate);

  return user && user.dataValues;
};
