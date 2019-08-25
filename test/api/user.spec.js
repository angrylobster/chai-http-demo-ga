const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const { app, dropConnection } = require('../../src/app');

describe('User API', () => {
    afterAll(dropConnection);
    describe('GET "/users', () => {
        it('should have a status of 200', done => {
            chai.request(app)
                .get('/users')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
});
