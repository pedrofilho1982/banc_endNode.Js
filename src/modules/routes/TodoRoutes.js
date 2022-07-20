const Router = require("express");
const todoRoutes = Router();
const { TodoController } = require("../to_do/controller/TodoCrontoller");

//crianção de usuário
const todoController = new TodoController();
todoRoutes.post("/", todoController.create);
todoRoutes.get("/:username", todoController.findAllTodosUsername);
todoRoutes.patch("/:id", todoController.markTodoAsDone);


module.exports = todoRoutes;
