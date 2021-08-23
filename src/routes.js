const routes = requere("express").Router();

const postController = require("./controllers/posts");

routes.get('/posts', postController.index)

module.exports = routes;