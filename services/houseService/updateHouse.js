const dataBase = require("../../dataBase").getInstance();

module.exports = async (updateObject, houseId) => {
  const HouseModel = dataBase.getModel("House");

  return HouseModel.update(updateObject, {
    where: {
      id: houseId
    }
  });
};
