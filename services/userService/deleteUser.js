const dataBase = require("../../dataBase").getInstance();

module.exports = async user_id => {
  const UserModel = dataBase.getModel("User");

  await UserModel.destroy({
    where: {
      id: user_id
    }
  });
};
