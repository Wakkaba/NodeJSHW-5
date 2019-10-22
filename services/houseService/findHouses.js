const dataBase = require("../../dataBase").getInstance();

module.exports = async () => {
  const HouseModel = dataBase.getModel("House");

  const findAllHouses = await HouseModel.findAll();

  return findAllHouses;
};
