const db = require('../models/db');

exports.getTotalContractCount = async (user_id) => {
    const countQuery = 'SELECT COUNT(*) as count FROM contracts WHERE user_id = ?';
    const countValues = [user_id];
    const [countResult] = await db.query(countQuery, countValues);
    return countResult[0].count;
}