const Sequelize = require("sequelize");

const fs = require("fs");

const { resolve } = require("path");

module.exports = (() => {
  let instance;

  function initConnection() {
    const models = {};

    const client = new Sequelize("LUN", "root", "password", {
      host: "localhost",
      dialect: "mysql"
    });

    function getModels() {
      fs.readdir("./dataBase/models", (err, file) => {
        file.forEach(file => {
          const [modelName] = file.split(".");

          models[modelName] = client.import(
            resolve(`./dataBase/models/${modelName}`)
          );
        });
      });
    }

    return {
      setModels: () => getModels(),
      getModel: modelName => models[modelName]
    };
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = initConnection();
      }

      return instance;
    }
  };
})();
