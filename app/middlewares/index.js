const verifyContractDetails =(req,res,next)=>{
    const {user_id,contract_name,description,amount} = req.body;
    
    if(!user_id || user_id.length === 0 || user_id === undefined || user_id === null){
        return res.status(400).json({error:"User id is required"})
    }

    if(!contract_name || contract_name.length === 0 || contract_name === undefined || contract_name === null){
        return res.status(400).json({error:"Contract name is required"})
    }

    if(!description || description.length === 0 || description === undefined || description === null){
        return res.status(400).json({error:"Description is required"})
    }

    if(!amount || amount.length === 0 || amount === undefined || amount === null){
        return res.status(400).json({error:"Amount is required"})
    }

    next();
}

const verifyID = (req,res,next)=>{
    const {id} = req.params;
    if(!id || id.length === 0 || id === undefined || id === null){
        return res.status(400).json({error:"id is required"})
    }
    next();
}

module.exports = {
    verifyContractDetails,
    verifyID
}