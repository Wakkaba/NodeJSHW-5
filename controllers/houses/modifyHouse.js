//const dataBase = require('../../dataBase').getInstance();
const { houseService } = require("../../services");

module.exports = async (req, res) => {
  try {
    const oldHouse = req.house;
    const newHouse = req.body;
    const user = req.user;

    const resultHouse = { ...oldHouse, user_id: user.id, ...newHouse };

    await houseService.updateHouse(resultHouse, oldHouse.id); //updateHouseById

    res.redirect(`/house/${oldHouse.id}`);
  } catch (e) {
    res.json(e.message);
  }
};
