const {getMdl} = require("../model")
const getData = async (req , res, next)=>{
    const data = await getMdl()
    return res
    .status(200)
    .json({message:"Data get Successfully",data:data})
} 
module.exports = getData;