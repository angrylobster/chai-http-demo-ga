const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { expect } = chai;
const { server, dropConnection } = require('../src/server');

describe('User API', () => {
    afterAll(dropConnection);
    describe('GET "/users', () => {
        it('should have a status of 200', done => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });

        it('should return a response.body with the key "data"', done => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    expect(res.body).to.have.any.keys('data');
                    done();
                });
        });

        it('should return a response.body with "data" of array with length 5', done => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    expect(res.body.data)
                        .to.be.an('array')
                        .with.lengthOf(5);
                    done();
                });
        });
    });

    describe('POST /users', () => {
        it('should insert user if the request.body contains the correct data', done => {
            chai.request(server)
                .post('/users')
                .send({
                    username: 'superUser',
                    email: 'super@user.com',
                    password: 'user123'
                })
                .end((err, res) => {
                    expect(res.body.data)
                        .to.be.an('array')
                        .with.lengthOf(1);
                    const insertedUser = res.body.data[0];
                    expect(insertedUser.username).to.equal('superUser');
                    done();
                });
        });
    });

    describe('DELETE /users', () => {
        it('should delete user if the request.body contains the correct data', done => {
            chai.request(server)
                .delete('/users')
                .send({
                    id: 2
                })
                .end((err, res) => {
                    expect(res.body.data)
                        .to.be.an('array')
                        .with.lengthOf(1);
                    const deletedUser = res.body.data[0];
                    expect(deletedUser.username).to.equal('awongh');
                    done();
                });
        });
    });
});
