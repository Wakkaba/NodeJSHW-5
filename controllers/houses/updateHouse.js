//const dataBase = require('../../dataBase').getInstance();
const { houseService } = require("../../services");

module.exports = async (req, res) => {
  try {
    const { houseID } = req.params;
    const HouseUpdate = req.body;
    //const HouseModel = dataBase.getModel('House');

    // await HouseModel.update(HouseUpdate, {
    //     where: {
    //         id: houseID
    //     }
    // });
    await houseService.updateHouseById(HouseUpdate, houseID); //updateHouseById

    res.redirect(`/houses/${houseID}`);
  } catch (e) {
    res.json(e.message);
  }
};
