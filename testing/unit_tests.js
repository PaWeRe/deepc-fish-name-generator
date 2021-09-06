const chai = require("chai"); // Mocha, which is a light-weight Node.js test framework
const chaiHttp = require("chai-http");
const expect = chai.expect
const baseUrl = "https://localhost:5000"
// const baseUrl = "localhost:3200/"
chai.use(chaiHttp);
describe("Deepc Fish Name Generator Unit Test", () => {

    it('a fish name cannot be picked twice', function(done) {
        chai.request(baseUrl)
        .get('/newFishName')
        .set("authorization", "Basic "+token)
        .end(function (err, res) {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property("_id");
            expect(res.body._id).to.equal(orderId);
            expect(res.body.name).to.equal(orderBody.name);
            expect(res.body.quantity).to.equal(orderBody.quantity);
            done();
        });
    });
        
})

it(`multiparty has correct initial isOperational() value`, async function () {

    // Get operating status
    let status = await config.flightSuretyData.isOperational.call();
    //console.log(status);
    assert.equal(status, true, "Incorrect initial operating status value");

  });