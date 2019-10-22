const { userService } = require("../../services");

module.exports = async (req, res) => {
  try {
    const { user_id } = req.params;

    await userService.deleteUser(user_id);

    res.json(`User with id ${user_id} was deleted`);
  } catch (e) {
    res.json(e.message);
  }
};
