const express = require('express');
const router = express.Router();
const ContractController = require('./controllers/contract.controller');

router.route('/').post(ContractController.createContract);
router.route('/all/:id').get(ContractController.getContractsByUserId);
router.route('/:id')
    .get(ContractController.getContractByContractId)
    .put(ContractController.updateContractById)
    .delete(ContractController.deleteContractById);

module.exports = router;