const { tokenVerification } = require("../../helpers");

module.exports = async auth => {
  console.log(auth);
  
  return tokenVerification(auth.substring(7));
};
