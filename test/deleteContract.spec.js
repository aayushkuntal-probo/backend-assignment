const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const expect = chai.expect;

chai.use(chaiHttp);

describe("Contracts API", () => {
  describe("DELETE /api/contracts/:id", () => {
    it("should delete a contract", async () => {

      const contractIdToDelete = 5;
      const res = await chai
        .request(app)
        .delete(`/api/contracts/${contractIdToDelete}`);

      // Assertions
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.equal(`Contract ${contractIdToDelete} deleted successfully`);

    });
  });
});