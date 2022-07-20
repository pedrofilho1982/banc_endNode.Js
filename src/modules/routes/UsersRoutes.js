const Router = require("express");
const usersRoutes = Router();
const {CreateUserController }  = require("../users/controllers/CreateUserController");

//crianção de usuário
const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);


module.exports = usersRoutes;
