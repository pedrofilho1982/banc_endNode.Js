const Router = require("express");
const usersRoutes = require("./modules/routes/UsersRoutes");
const todoRoutes = require("./modules/routes/TodoRoutes");


const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/todos", todoRoutes);

// para métodos HTTP diferentes, pode usar a mesma rota ("/users").
// para métodos HTTP iguais, não se pode usar a mesma rota pois o programa
// não ira compreender a execução


module.exports = routes;