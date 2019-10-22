const { authService } = require("../../services");

module.exports = async (req, res, next) => {
  try {
    const user = await authService.authUser(req.headers.authorization);

    if (!user) {
      next(new Error("User if not present"));
    }
    req.user = user;

    next();
  } catch (e) {
    next(e);
  }
};
