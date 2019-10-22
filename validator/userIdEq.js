module.exports = (userID, userIdFromToken) => {
  if (+userID !== userIdFromToken) {
    throw new Error(`It's not yours, don't touch this!`);
  }
};
