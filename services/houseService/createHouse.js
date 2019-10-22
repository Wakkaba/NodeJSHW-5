const dataBase = require("../../dataBase").getInstance();

module.exports = async (HouseToCreate, userId) => {
  const HouseModel = dataBase.getModel("House");

  const houseToInsert = { user_id: userId, ...HouseToCreate };

  const house = await HouseModel.create(houseToInsert);

  return house && house.dataValues;
};
