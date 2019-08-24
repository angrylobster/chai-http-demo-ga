const { userRepository } = require('../../src/repository');
const { expect } = require('chai');

describe('User Repository', () => {
    afterAll(async () => {
        await userRepository.end();
    });

    describe('.findAll()', () => {
        it('should retrieve an array of users', async () => {
            const users = await userRepository.findAll();
            expect(users)
                .to.be.an('array')
                .with.lengthOf(5);
        });
    });
});
