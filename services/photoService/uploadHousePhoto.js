const dataBase = require("../../database").getInstance();

module.exports = async (path) => {
  const housePhotoModel = dataBase.getModel("housePhoto");

  await housePhotoModel.create(path);
};
