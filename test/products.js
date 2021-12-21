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

describe('Products', () => {
    describe('/GET all products', () => {
        it('it should GET all orders', (done) => {
            chai.request(server)
                .get('/products')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.result.should.be.a('array');
                    expect(res.body.message).to.equal('successful')
                    // res.body.length.should.be.eql(9); // fixme :)
                    done();
                });
        });
    })
})

