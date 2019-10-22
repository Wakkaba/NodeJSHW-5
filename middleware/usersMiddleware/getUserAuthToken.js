const { userService } = require("../../services");

module.exports = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await userService.findUserService({ email, password });
  if (!user) {
    next(new Error("User if not present"));
  }

  req.user = user;

  next();
};
