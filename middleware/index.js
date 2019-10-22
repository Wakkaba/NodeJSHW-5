const usersMiddleware = require('./usersMiddleware');

const housesMiddleware = require('./housesMiddleware');

const checkAccessToken = require('./checkAccessToken')

const filesMiddleware = require('./filesMiddleware')


module.exports = {
    usersMiddleware,
    housesMiddleware,
    checkAccessToken,
    filesMiddleware
};