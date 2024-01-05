const db = require('../models/db');

const createContract = async (user_id, contract_name, description,amount,callback) => {
    try {
        const query = `INSERT INTO contracts (user_id, contract_name, description,amount) VALUES ($1,$2,$3,$4) RETURNING *`;
        const values = [user_id, contract_name, description,amount];
        const { rows } = await db.query(query, values);
        callback(null, rows[0]);
    }

    catch (err) {
        callback(err, null);
    }

}

const getAllContracts = async (callback) => {
    try {
        const query = `SELECT * FROM contracts`;
        const { rows } = await db.query(query);
        callback(null, rows);
    }
    catch (err) {
        callback(err, null);
    }
}

const getContractById = async (id, callback) => {
    try {
        const query = `SELECT * FROM contracts WHERE contract_id=$1`;
        const values = [id];
        const { rows } = await db.query(query, values);
        callback(null, rows[0]);
    }
    catch (err) {
        callback(err, null);
    }
}

const updateContractById = async (id, user_id, contract_name, description,amount,callback) => {
    try {
        const query = `UPDATE contracts SET user_id=$1, contract_name=$2, description=$3,amount=$4 WHERE contract_id=$5 RETURNING *`;
        const values = [user_id, contract_name, description,amount, id];
        const { rows } = await db.query(query, values);
        callback(null, rows[0]);
    }
    catch (err) {
        callback(err, null);
    }
}

const deleteContractById = async (id, callback) => {
    try {
        const query = `DELETE FROM contracts WHERE contract_id=$1`;
        const values = [id];
        await db.query(query, values);
        callback(null, null);
    }
    catch (err) {
        callback(err, null);
    }
}

module.exports = {
    createContract,
    getAllContracts,
    getContractById,
    updateContractById,
    deleteContractById
}