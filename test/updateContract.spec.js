const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Contract API", () => {
  describe("PUT /api/contracts/:id", () => {
    it("It should update contract with id = 1", (done) => {
      const contract = {
        user_id: 1,
        contract_name: "Contract 1",
        description: "Contract 1 description",
        amount: 1000
      }
      chai.request(app)
        .put("/api/contracts/2")
        .send(contract)
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.a("object");
          expect(res.body).to.have.property("contract_id");
          expect(res.body).to.have.property("contract_name");
          expect(res.body).to.have.property("description");
          expect(res.body).to.have.property("amount");

          const actualAmount = parseFloat(res.body.amount).toFixed(2);
          expect(actualAmount).to.equal(contract.amount.toFixed(2).toString());

          done();
        });
    });
  });
});
