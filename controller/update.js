const {updateMdl} = require("../model")
const updateData = async(req,res,next)=>{
    try{
        const {_id,name} = req.body
        const data = await updateMdl(_id,name)
        return res
        .status(200)
        .json({message:"Data Updated Successfully",data:data})
    }catch(error){
        console.error(error)
        next(error)
    }
}
module.exports = updateData;

