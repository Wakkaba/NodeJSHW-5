const jwt = require("jsonwebtoken");

const { JWT_SECRET, JWT_REFRESH } = require("../config/secret");

module.exports = data => {
  const accessToken = jwt.sign(data, JWT_SECRET, { expiresIn: "20m" });
  const refreshToken = jwt.sign({}, JWT_REFRESH, { expiresIn: "10h" });

  return {
    accessToken,
    refreshToken
  };
};
