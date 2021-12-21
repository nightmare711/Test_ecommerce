process.env.NODE_ENV = 'test';

const { expect } = require('chai');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'http://localhost:3001';
let should = chai.should();

chai.use(chaiHttp);

describe('Orders', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });
    /*
     * Test the /GET route
     */
    describe('/GET all orders', () => {
        it('it should GET all orders', (done) => {
            chai.request(server)
                .get('/orders')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.result.should.be.a('array');
                    expect(res.body.message).to.equal('successful')
                    // res.body.length.should.be.eql(9); // fixme :)
                    done();
                });
        });
    });
    describe('/GET orders by owner', () => {
        it('it should GET all orders', (done) => {
            chai.request(server)
                .get('/orders/61954256122e2be41aaf9fbe')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.result.should.be.a('array');
                    expect(res.body.message).to.equal('successful')
                    // res.body.length.should.be.eql(9); // fixme :)
                    done();
                });
        });
    })
});

// describe('Products', () => {
//     describe('/GET all products', () => {
//         it('it should GET all orders', (done) => {
//             chai.request(server)
//                 .get('/products')
//                 .end((err, res) => {
//                     res.should.have.status(200);
//                     res.body.result.should.be.a('array');
//                     expect(res.body.message).to.equal('successful')
//                     // res.body.length.should.be.eql(9); // fixme :)
//                     done();
//                 });
//         });
//     })
// })

describe('Users', () => {
    describe('Login users', () => {
        it('it should login failed', (done) => {
            let users = {
                usersname: 'htran711',
                password: 'KoOn711286'
            }
            chai.request(server)
                .post('/users/login')
                .send(users)
                .end((err, res) => {
                    expect(res.body.status).to.be.eq(0)
                    expect(res.body.message).to.be.eq("Invalid email or password")
                    res.should.have.status(404);
                    done();
                });
        });
    })
    describe('Update user', () => {
        it('it should update users successful', (done) => {
            let users = {
                firstName: 'TranH',
                bio: 'i am a good boiz'
            }
            chai.request(server)
                    .post('/users/update/61bce81a18d0f99c9d52ebfc')
                    .send(users)
                    .end((err, res) => {
                        expect(res.body.status).to.be.eq(1)
                        expect(res.body.message).to.be.eq("update successful")
                        done();
                    });
        })
        it('it should update failed', (done) => {
            let users = {
                firstName: 'TranH',
                bio: 'i am a good boiz'
            }
            chai.request(server)
                    .post('/users/update/61bce81a18d0f99c9dfc')
                    .send(users)
                    .end((err, res) => {
                        expect(res.body.status).to.be.eq(0)
                        // expect(res.body.message).to.be.eq("update successful")
                        done();
                    });
        })
    })
})
