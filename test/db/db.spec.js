const { db } = require('../../src/db');
const { expect } = require('chai');

describe('Postgres', () => {
    afterAll(db.end);

    describe('.query()', () => {
        it('should be able to query "SELECT 1=1" with 1 result', async () => {
            const results = await db.query('SELECT 1=1');
            expect(results)
                .to.be.an('array')
                .with.lengthOf(1);
        });
    });
});
