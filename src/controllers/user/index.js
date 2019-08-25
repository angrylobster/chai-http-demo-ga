const { user: userRepository } = require('../../repositories');
const { response: responseBuilder } = require('../../builders');

async function findAll(request, response) {
    const results = await userRepository.findAll();
    buildAndReturnResponse(request, response, results);
}

async function insertUser(request, response) {
    const { username, email, password } = request.body;
    const results = await userRepository.insertUser(username, email, password);
    buildAndReturnResponse(request, response, results);
}

async function deleteUser(request, response) {
    const { id } = request.body;
    const results = await userRepository.deleteUser(id);
    buildAndReturnResponse(request, response, results);
}

function buildAndReturnResponse(request, response, results) {
    const responseObject = responseBuilder.build(request, results);
    response.json(responseObject);
}

module.exports = {
    deleteUser,
    dropConnection: userRepository.dropConnection,
    findAll,
    insertUser
};
