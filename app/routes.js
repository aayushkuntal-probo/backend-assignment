const express = require('express');
const router = express.Router();
const ContractController = require('./controllers/contract.controller');
const VerifyMiddleware = require('./middlewares/index');

router.route('/').post(VerifyMiddleware.verifyContractDetails, ContractController.createContract);
router.route('/all/:id').get(VerifyMiddleware.verifyID, ContractController.getContractsByUserId);
router.route('/:id')
    .get(VerifyMiddleware.verifyID, ContractController.getContractByContractId)
    .put(VerifyMiddleware.verifyContractDetails, ContractController.updateContractById)
    .delete(VerifyMiddleware.verifyID, ContractController.deleteContractById);

module.exports = router;