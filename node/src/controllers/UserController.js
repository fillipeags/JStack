let users = require('../mocks/users')

module.exports = {
    listUsers(request, response) {
        const { order } = request.query;

        const sortedUsers = users.sort((previous, actual) => {
            if(order === 'desc') {
                return actual.id < previous.id ? 1 : -1;
            }
            return actual.id > previous.id ? 1 : -1;
        })

        response.send(200, sortedUsers);
    },

    getUserById(request, response) {
        const { id } = request.params;

        const user = users.find((userObj) => userObj.id === Number(id));

        if (!user) response.send(400, { error: 'User not found' });
        response.send(200, user);
    },

    createUser(request, response) {
        const { body } = request;
        const lastUserId = users[users.length - 1].id;
        
        const newUser = {
            id: lastUserId + 1,
            name: body.name,
        }

        users.push(newUser);

        response.send(200, newUser)
    },

    updateUser(request, response) {
        let { id } = request.params;
        const { name } = request.body;

        id = Number(id);

       const userExists = users.find((user) => user.id === id);

       if (!userExists) {
           return response.send(400, { error: 'User not found' });
       }

       users = users.map(user => {
           if (user.id === id) {
               return {
                   ...user,
                   name
               };
           };
           return user;
       });

       response.send(200, { id, name });
    },

    deleteUser(request, response) {
        let { id } = request.params;
        id = Number(id);

        users = users.filter(user => user.id !== id);

        response.send(200, { users });
    }
}