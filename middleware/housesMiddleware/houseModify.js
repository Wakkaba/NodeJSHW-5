module.exports = (req, res, next) => {
  if (req.user.id === req.house.user_id) {
    next();
  } else {
    next(new Error("Nema dostupu"));
  }
};
