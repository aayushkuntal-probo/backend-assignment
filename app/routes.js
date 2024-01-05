const express = require('express');
const router = express.Router();

router.post('/',ContractController.createContract);
router.get('/lists',ContractController.getContracts);
router.get('/:id',ContractController.getContract);
router.put('/:id',ContractController.updateContract);
router.delete('/:id',ContractController.deleteContract);

module.exports = router;