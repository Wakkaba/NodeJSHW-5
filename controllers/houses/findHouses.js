//const dataBase = require('../../dataBase').getInstance();
const { houseService } = require("../../services");

module.exports = async (req, res) => {
  try {
    //const HouseModel = dataBase.getModel('House');

    //const findAllHouses = await HouseModel.findAll();
    const findAllHouses = await houseService.findAll();

    res.json(findAllHouses);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
