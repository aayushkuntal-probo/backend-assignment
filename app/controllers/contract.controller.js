const ContractModel = require('../models/contract.model');

// POST => /api/contracts/
const createContract = async (req, res) => {
    try {
        const { user_id, contract_name, description, amount } = req.body;

        ContractModel.createContract(user_id, contract_name, description, amount, (err, newContract) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(201).json(newContract);
            }

        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET => /api/contracts/all/:id
const getContracts = async (req, res) => {
    try {
        const user_id = req.params.id;
        ContractModel.getAllContracts(user_id, (err, contracts) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json(contracts);
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// GET => /api/contracts/:id
const getContractById = async (req, res) => {
    try {
        const id = req.params.id;
        ContractModel.getContractById(id, (err, contract) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json(contract);
            }
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// PUT => /api/contracts/:id
const updateContractById = async (req, res) => {
    try {
        const id = req.params.id;

        const {contract_name, description, amount } = req.body;

        ContractModel.updateContractById(id,contract_name, description, amount, (err, updatedContract) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json(updatedContract);
            }
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// DELETE => /api/contracts/:id
const deleteContractById = async (req, res) => {
    try {
        const id = req.params.id;
        ContractModel.deleteContractById(id, (err) => {
            if (err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json({ message: `Contract ${id} deleted successfully` });
            }
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createContract,
    getContracts,
    getContractById,
    updateContractById,
    deleteContractById
}