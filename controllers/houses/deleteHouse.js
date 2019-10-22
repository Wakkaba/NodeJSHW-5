const { houseService } = require("../../services");

module.exports = async (req, res) => {
  try {
    const { house_id } = req.params;

    await houseService.deleteHouse(house_id);

    res.json(`House with id ${house_id} was deleted`);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
