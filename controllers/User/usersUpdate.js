//const dataBase = require('../../dataBase').getInstance();
const { userService } = require("../../services");

module.exports = async (req, res) => {
  try {
    const { userID } = req.params;
    const updatingData = req.body;
    //const UserModel = dataBase.getModel('User');

    // await UserModel.update(updatingData, {
    //     where: {
    //         id: userID
    //     }
    // });
    await userService.update(updatingData, {
      where: {
        id: userID
      }
    });

    res.redirect(`/users/${userID}`);
  } catch (e) {
    res.json(e.message);
  }
};
