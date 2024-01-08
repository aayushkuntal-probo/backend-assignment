const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); 
const expect = chai.expect;

chai.use(chaiHttp);

describe("Contracts API", () => {
    describe("GET /api/contracts/all/:id", () => {
        it("should return all contracts for a given user", async () => {

            const res = await chai
                .request(app)
                .get("/api/contracts/all/1?page=1&pageSize=2");

            // Assertions
            expect(res.status).to.equal(200);
            expect(res.body).to.have.property("page");
            expect(res.body).to.have.property("page_info");
            expect(res.body.page).to.be.an("array");
            expect(res.body.page_info).to.be.an("object");

        });
    });
});
