const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Contracts API", () => {
    describe("GET /api/contracts/:id", () => {
        it("should return a particular contract using contract id", async () => {

            const res = await chai
                .request(app)
                .get("/api/contracts/2");

            //Assertions
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property("user_id");
            expect(res.body).to.have.property("contract_name");
            expect(res.body).to.have.property("description");
            expect(res.body).to.have.property("amount");

        });
    });
});