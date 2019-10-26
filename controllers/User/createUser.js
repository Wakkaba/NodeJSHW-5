//const dataBase = require('../../dataBase').getInstance();
const { userService, emailService } = require("../../services");

const { resolve } = require("path");

const uuid = require("uuid").v1();

module.exports = async (req, res) => {
  try {
    const UserToCreate = req.body;
    //const UserModel = dataBase.getModel('User');

    //await UserModel.create(UserToCreate);
    const { id } = await userService.createUser(UserToCreate);
    
    const [photo] = req.photo;
    const appRoot = global.appRoot;

    const photoDir = `user/${id}/photo`;
    const photoExtension = photo.name.split(".").pop();
    const photoName = `${uuid}.${photoExtension}`;

    await fs.mkdirSync(resolve(appRoot, "public", photoDir), {
      recursive: true
    });

    await photo.mv(resolve(appRoot, "public", photoDir, photoName));

    await userService.updateUserService(
      { photo_path: `${photoDir}/${photoName}` } //tr
    );

    //email sender service
    await emailService.sendEmail(UserToCreate.email);

    res.json(UserToCreate);
  } catch (e) {
    res.json(e.message);
  }
};
