//const db = require("../../dataBase").getInstance();
const { userService } = require("../../services");

module.exports = async (req, res, next) => {
  try {
    const { userID } = req.params;
    //const UserModel = db.getModel("User");

    const findUser = await userService.getById(userID);

    if (!findUser) {
      throw new Error(`User with ${userID} ID is not found`);
    }

    req.user = findUser;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};

// const dataBase = require('../../dataBase').getInstance();

// module.exports = async (req, res, next) => {
//     try {
//         const {userID} = req.params;
//         const UserModel = dataBase.getModel('User');

//         const foundUser = await UserModel.findByPk(userID);

//         if (!foundUser) {
//             throw new Error(`User id:${userID} is not present`)
//         }

//         req.user = foundUser;
//         next();

//     } catch (e) {
//         res.status(400).json(e.message);
//     }
// };
