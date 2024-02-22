const {deleteMdl} = require('../model')
const deleteData = async (req,res,next)=>{
    try{
    const id = req.params.id;
        const data = await deleteMdl(id)
        return res
        .status(200)
        .json({message:"Data Delete Successfully",data:data})
    }catch(error){
        console.error(error);
        next(error);
    }
  
}

module.exports = deleteData;

