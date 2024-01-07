const ContractModel = require('../models/contract.model');

/*
    *  POST : /
    *  req-body : user_id, contract_name, description, amount
    *  req-params : none
*/

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

/*
     *  GET : /all/:id?page=1&pageSize=10
     *  req-body : none
     *  req-params : page, pageSize
*/

const getContractsByUserId = async (req, res) => {
    try {
        const user_id = req.params.id;
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        ContractModel.getAllContracts(user_id,page,pageSize, (err, contracts) => {
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

/*
    *  GET : /:id
    *  req-body : none
    *  req-params : id
*/
const getContractByContractId = async (req, res) => {
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

/*
    *  PUT : /:id
    *  req-body : contract_name, description, amount
    *  req-params : id
*/
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

/*
    *  DELETE : /:id
    *  req-body : none
    *  req-params : id
*/

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
    getContractsByUserId,
    getContractByContractId,
    updateContractById,
    deleteContractById
}