const users = [];

class CreateUserController {
    handle(req, rep) {
        const { name, username, email } = req.body;

    const user = {name, username, email};

    users.push(user);

    return rep.json({user}).send(201);
    }
    list(request, response) {
        response.json({users: users});
    }
}

module.exports = {CreateUserController};