module.exports = (req, res, next) => {
  const photos = req.photos;

  if (photos.length > 1) {
    return next(new Error("Only one photo upload allowed"));
  }

  next();
};
