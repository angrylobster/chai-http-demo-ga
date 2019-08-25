const { userRepository } = require('../../../src/repository');
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
                .with.length.at.least(5);
        });
    });

    describe('.insert()', () => {
        it('should insert a user into the users table', async () => {
            const results = await userRepository.insert(
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
});
