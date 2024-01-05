const express = require('express');
const router = express.Router();
const ContractController = require('./controllers/contract.controller');

router.post('/',ContractController.createContract);
router.get('/lists',ContractController.getContracts);
router.get('/:id',ContractController.getContractById);
router.put('/:id',ContractController.updateContractById);
router.delete('/:id',ContractController.deleteContractById);

module.exports = router;