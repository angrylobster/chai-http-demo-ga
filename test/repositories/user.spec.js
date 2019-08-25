const { user: userRepository } = require('../../src/repositories');
const { expect } = require('chai');

describe('User Repository', () => {
    afterAll(userRepository.dropConnection);

    describe('.findAll()', () => {
        it('should retrieve an array of users', async () => {
            const users = await userRepository.findAll();
            expect(users)
                .to.be.an('array')
                .with.length.at.least(5);
        });
    });

    describe('.insertUser()', () => {
        it('should insert a user into the users table', async () => {
            const results = await userRepository.insertUser(
                'angrylobster',
                'shan@shan.com',
                'abc123'
            );
            expect(results)
                .to.be.an('array')
                .with.lengthOf(1);
            expect(results[0].username).to.equal('angrylobster');
        });
    });

    describe('.deleteUser()', () => {
        it('should delete a user from the users table', async () => {
            const results = await userRepository.deleteUser(5);
            expect(results)
                .to.be.an('array')
                .with.lengthOf(1);
            expect(results[0].username).to.equal('dubiousGuy');
        });
    });
});
