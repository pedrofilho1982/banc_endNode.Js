const toDos = [];
const {v4: uuidv4 } = require('uuid');


class TodoController {
    create(req, res) {
        // username > definindo o dono do login
        //deadline > data para conclusão da tarefa

        const { username, title, deadline } = req.body;
        //validação do usuário 
        //se existe, para criar tarefas

        const todo = { 
            id: uuidv4(), 
            title, 
            username, 
            deadline, 
            done: false,
        };
        
        toDos.push(todo);

        return res.json(todo).status(200);

    }

    findAllTodosUsername(req, res) {
        const { username } = req.params;

        const tudo = toDos.filter((todo) => todo.username === username);

        return res.json({ tudo }).status(200);
    }

    //atualizar todo como concluído
    markTodoAsDone(req, res) {
        const { id } = req.params;

        const todo = toDos.find((todo) => todo.id === id);
        if (!todo) {
            return res.json({ status: "Error, Cliente not found"}).send(404);
        }

        //correção do toDo
        todo.done = false;
        toDo.push({ ... todo});

        return res.json(todo);
    }

    deleteTodoById (req, res) {
        const { id } = req.params;
        const todo = toDos.find((todo) => todo.id === id);

        if (!todo){
            return res.json({ erro: "Não existe Cadastro"}).send(404);
        }
        //deleteTodoById
    }

}

module.exports = { TodoController };