const dataBase = require("../../dataBase").getInstance();

module.exports = async (email, password) => {
  const UserModel = dataBase.getModel("User");

  const user = await UserModel.findOne({
    where: { email: email, password: password }
  });

  return user && user.dataValues;
};
