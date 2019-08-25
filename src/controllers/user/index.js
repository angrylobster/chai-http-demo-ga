const { user: userRepository } = require('../../repositories');

async function findAll(request, response) {
    const results = await userRepository.findAll();
    response.json({
        status: 'success',
        data: results
    });
}

module.exports = {
    dropConnection: userRepository.dropConnection,
    findAll
};
