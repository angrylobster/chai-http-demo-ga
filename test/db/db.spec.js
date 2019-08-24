const { postgres } = require('../../src/db');
const { expect } = require('chai');

describe('Postgres', () => {
    describe('.query()', () => {
        it('should be able to query "SELECT 1=1" with 1 result', async () => {
            const results = await postgres.query('SELECT 1=1');
            expect(results.rows)
                .to.be.an('array')
                .with.lengthOf(1);
        });
    });
});
