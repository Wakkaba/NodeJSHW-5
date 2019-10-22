module.exports = (req, res) => {
  res.render("houseModify", {
    houseId: req.params.houseId,
    houseUrl: `/house/modify/${req.params.houseId}`
  });
};
