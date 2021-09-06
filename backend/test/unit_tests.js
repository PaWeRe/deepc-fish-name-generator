const assert = require("assert");
const chai = require("chai"); // Mocha = testing framework for JavaScript, Chai = assertion library
const chaiHttp = require("chai-http");
let server = require('../server');
const expect = chai.expect

//Assertion style
chai.should();
chai.use(chaiHttp);

describe("Deepc Fish Name Generator Unit Test", () => {

    it('GET request is functioning correctly', (done) => {
        chai.request(server.app)
        .get("/getFishName")
        .end((err, res) => {
            res.should.have.status(200); //checking for successful server response
            expect(res.text).to.be.an('string');
            //console.log(res);
            //assert.equal(res, 0, `${res.body}`);
            done();
        });
    });

    it('a fish name can only be used once', () => {
        let used_array = ['Wire-netted reefcod', 'Abyssal assfish', 'Abyssal cutthroat eel', 'Acadian redfish'];
        let rand_element = "Wire-netted reefcod";

        const result = server.checkUniqueness(used_array, rand_element);
        assert.equal(result, true, "Already used project name is not recognized!");
    });
        
})