const db = require('../models/db');

const createContract = async (user_id, contract_name, description, amount, callback) => {
    try {
        const query = 'INSERT INTO contracts (user_id, contract_name, description, amount) VALUES (?, ?, ?, ?)';
        const values = [user_id, contract_name, description, amount];
        const [rows] = await db.query(query, values);

        const contract_id = rows.insertId;
        const query2 = 'SELECT * FROM contracts WHERE contract_id = ?';
        const [rows2] = await db.query(query2, [contract_id]);

        callback(null, rows2[0]);
    } catch (err) {
        callback(err, null);
    }
}

const getAllContracts = async (user_id,page,pageSize,callback) => {
    try {
        const skip = (page - 1) * pageSize;

        const query = 'SELECT contract_id,contract_name, description, amount FROM contracts WHERE user_id = ? LIMIT ?,?';
        const values = [user_id,skip,pageSize];
        const [rows] = await db.query(query, values);

        if(rows.length === 0) callback({message: 'No contracts found'}, null);
        else callback(null, rows);

    } catch (err) {
        callback(err, null);
    }
}

const getContractById = async (id, callback) => {
    try {
        const query = 'SELECT user_id,contract_name, description, amount FROM contracts WHERE contract_id = ?';
        const values = [id];
        const [rows] = await db.query(query, values);

        if(rows.length === 0) callback({message: 'No contract found'}, null);
        else callback(null, rows[0]);

    } catch (err) {
        callback(err, null);
    }
}

const updateContractById = async (id,contract_name, description, amount, callback) => {
    try {
        const isExists = 'SELECT * FROM contracts WHERE contract_id = ?';
        const [rows1] = await db.query(isExists, [id]);
        if(rows1.length === 0) return callback({message: 'No contract found to update'}, null);


        const updateQuery = 'UPDATE contracts SET contract_name = ?, description = ?, amount = ? WHERE contract_id = ?';
        const values = [contract_name, description, amount, id];
        await db.query(updateQuery, values);

        const getUpdatedQuery = 'SELECT contract_id,contract_name, description, amount FROM contracts WHERE contract_id = ?';
        const [rows2] = await db.query(getUpdatedQuery, [id]);
        
        callback(null, rows2[0]);
    } catch (err) {
        callback(err, null);
    }
}

const deleteContractById = async (id, callback) => {
    try {
        const isExists = 'SELECT * FROM contracts WHERE contract_id = ?';
        const [rows1] = await db.query(isExists, [id]);
        if(rows1.length === 0) return callback({message: 'No contract found to delete'}, null);

        const query = 'DELETE FROM contracts WHERE contract_id = ?';
        const values = [id];
        await db.query(query, values);
        callback(null);
        
    } catch (err) {
        callback(err);
    }
}

module.exports = {
    createContract,
    getAllContracts,
    getContractById,
    updateContractById,
    deleteContractById
}
