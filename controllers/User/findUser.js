// const db = require ('../../dataBase').getInstance();

// module.exports = async (req,res) => {

//     const UserModel = db.getModel('User');
//     const users = await UserModel.findAll();
//     res.json(users);
// }

//const dataBase = require('../../dataBase').getInstance();
const { userService } = require("../../services");

// module.exports = async (req, res) => {
//     try {
//         console.log(req.user);
//         res.json(req.user);
//     } catch (e) {
//         res.status(400).json(e.message)
//     }
// };

module.exports = async (req, res) => {
  try {
    res.json(req.user);
  } catch (e) {
    res.status(400).json(e.message);
  }
};
