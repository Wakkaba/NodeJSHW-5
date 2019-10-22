//const dataBase = require('../../dataBase').getInstance();
const { houseService, photoService } = require("../../services");

const fs = require("fs-extra");

const { resolve } = require("path");

const uuid = require("uuid").v1();

module.exports = async (req, res) => {
  try {
    const HouseToCreate = req.body;
    //const HouseModel = dataBase.getModel('House');
    const userID = req.user.id;
    
    const photos = req.photos;
    
    const appRoot = global.appRoot;

    const photoDir = `house/${id}/photo`;

     fs.mkdirSync(resolve(appRoot, "public", photoDir), {
      recursive: true
    });

    for (let i = 0; i < photos.length; i++) {
      const photoExtension = photos[i].name.split(".").pop();
      const photoName = `${uuid}.${photoExtension}`;

      await photos[i].mv(resolve(appRoot, "public", photoDir, photoName));

      await photoService.uploadHousePhoto({
        house_id: id,
        photo_path: `${photoDir}/${photoName}`
      });

      //await HouseModel.create(HouseToCreate);
      await houseService.createHouse(HouseToCreate, userID);
    }
    res.json(HouseToCreate);
  } catch (e) {
    res.json(e.message);
  }
};
