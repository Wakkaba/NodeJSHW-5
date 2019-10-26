const router = require("express").Router();

const {
  usersMiddleware,
  filesMiddleware,
  checkAccessToken
} = require("../../middleware");

const { User } = require("../../controllers");



router.post(
  "/",
  User.createUser,
  filesMiddleware.checkPhotoAmount,
  filesMiddleware.checkPhoto
);
//router.get('/', User.findAllUsers);
const dataBase = require("../../dataBase").getInstance();

router.get("/:userID", usersMiddleware.checkPresentUser, User.findUser);
// router.put('/:userID', users.checkPresentUser, User.usersUpdate);
//router.get(`/:userID`, usersMiddleware.checkPresentUser, User.getById);
router.put("/:userID", usersMiddleware.checkPresentUser, User.usersUpdate);
router.delete("/:userID", checkAccessToken, User.deleteUser);

module.exports = router;
