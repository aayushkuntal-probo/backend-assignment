const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Contracts API", () => {
  describe("POST /api/contracts", () => {
    it("should create a new contract", async () => {

      const newContract = {
        user_id: "1",
        contract_name: "Sample Contract",
        description: "This is a sample contract",
        amount: 1000.11,
      };

      const res = await chai
        .request(app)
        .post("/api/contracts")
        .send(newContract);

      // Assertions
      expect(res.status).to.equal(201);
      expect(res.body).to.have.property("contract_id");
      expect(res.body.user_id).to.equal(newContract.user_id);
      expect(res.body.contract_name).to.equal(newContract.contract_name);
      expect(res.body.description).to.equal(newContract.description);

      const actualAmount = parseFloat(res.body.amount).toFixed(2);
      expect(actualAmount).to.equal(newContract.amount.toString());

    });
  });
});
