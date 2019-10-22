const dataBase = require("../../dataBase").getInstance();

module.exports = async (updateData, userID) => {
  const UserModel = dataBase.getModel("User");

  await UserModel.update(updateData, {
    where: {
      id: userID
    }
  });
};
