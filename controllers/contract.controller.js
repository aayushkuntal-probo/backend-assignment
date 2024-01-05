const ContractModel = require('../models/contract.model');

const createContract = async (req, res) => {
    try {
        const { user_id, contract_name, description, amount } = req.body;
        
        ContractModel.createContract(user_id, contract_name, description, amount,(err, newContract) => {
            if(err) {
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

const getContracts = async (req, res) => {
    try {
        ContractModel.getAllContracts((err, contracts) => {
            if(err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json(contracts);
            }
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getContractById = async (req, res) => {
    try {
        const id = req.params.id;
        ContractModel.getContractById(id, (err, contract) => {
            if(err) {
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

const updateContractById = async (req, res) => {
    try{
        const id = req.params.id;

        //taking user_id etc only if it is not undefined

        const { user_id, contract_name, description, amount } = req.body;

        ContractModel.updateContractById(id, user_id, contract_name, description, amount, (err, updatedContract) => {
            if(err) {
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

const deleteContractById = async (req, res) => {
    try {
        const id = req.params.id;
        ContractModel.deleteContractById(id, (err, deletedContract) => {
            if(err) {
                res.status(500).json({ message: err.message });
            }
            else {
                res.status(200).json(deletedContract);
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