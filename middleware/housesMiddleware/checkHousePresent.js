//const db = require ('../../dataBase').getInstance();
const { houseService } = require("../../services");

module.exports = async (req, res, next) => {
  try {
    const { houseID } = req.params;
    //const houseModel = db.getModel('House');
    //const isHousePresent = await houseModel.findByPk(houseId);
    const isHousePresent = await houseService.findHouseById(houseID);

    if (!isHousePresent) {
      throw new Error(`House with ${houseID} ID is not found`);
    }

    req.house = isHousePresent;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};
