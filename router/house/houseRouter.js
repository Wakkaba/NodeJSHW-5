const router = require("express").Router();

const {
  housesMiddleware,
  usersMiddleware,
  filesMiddleware,
  checkAccessToken
} = require("../../middleware");

const { RenderPage, houses } = require("../../controllers");

router.post(
  "/",
  usersMiddleware.getUserFromToken,
  houses.addNewHouse,
  filesMiddleware.checkPhoto
);
// router.get(`/:houseID`, housesMiddleware.checkHousePresent, House.findByidHouse);
// router.put('/:houseID', housesMiddleware.checkHousePresent, House.updateHouse);
router.get(
  `/:houseID`,
  housesMiddleware.checkHousePresent,
  houses.findHouseById
);
router.post(
  "/:houseID",
  housesMiddleware.checkHousePresent,
  houses.updateHouse
);

// men
router.get("/modify/:houseId", RenderPage.houseModifyPage);

router.post(
  "/modify/:houseID",
  housesMiddleware.checkHousePresent,
  usersMiddleware.getUserFromToken,
  houses.modifyHouse
);

router.delete(
  "/:houseID",
  checkAccessToken,
  housesMiddleware.checkHousePresent,
  houses.deleteHouse
);

module.exports = router;
