const routes = require("express").Router();

const postController = require("./Controllers/posts");
const sessionController = require("./controllers/sessions");
const userController = require("./controllers/users");

routes.post('/sessions', sessionController.store);

routes.post('/user', userController.store);

routes.get('/post', postController.index);

module.exports = routes;