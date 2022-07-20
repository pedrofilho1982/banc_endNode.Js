const users = [];
const {v4: uuidv4 } = require('uuid');
class CreateUserController {
    handle(req, rep) {
        const { name, username, email } = req.body;

        const usernameAlreadyTaken = users.find(user => user.name === name && user.username === username);

        if (usernameAlreadyTaken) {
            return rep.json ({ error: 'User already taken' }).send(400);
        }

        const user = { id: uuidv4(), name, username, email };

        users.push(user);
               
        return rep.json({user}).send(201);
    }
    
}

module.exports = {CreateUserController};