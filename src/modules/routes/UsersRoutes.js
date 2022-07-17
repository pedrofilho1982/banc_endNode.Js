const Router = require("express");
const usersRoutes = Router();
const { CreateUserController } = require("../users/controllers/CreateUserController");

//crianção de usuário
const createUserController = new CreateUserController();
usersRoutes.post("/users", createUserController.handle);

//listagem de usuários
usersRoutes.get("/users", createUserController.list );

module.exports = usersRoutes;
