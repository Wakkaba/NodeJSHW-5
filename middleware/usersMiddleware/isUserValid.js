//const dataBase = require('../../dataBase').getInstance();
const { authService } = require("../../services");

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    //const UserModel = dataBase.getModel('User');
    //console.log(UserModel);

    // const findUser = await UserModel.findOne({
    //     where: {
    //         email: email,
    //         password: password
    //     },
    //     attributes: ['id']
    // });
    const findUser = await authService.findUserService(email, password);

    if (!findUser) {
      throw new Error("Invalid login or pass, try one more time");
    }

    req.user = findUser;
    next();
  } catch (e) {
    res.status(400).json(e.message);
  }
};
