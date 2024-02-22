const {todoSchema} = require("../schemas");
const updateMdl = async(id,rest)=>{
    try{
        const data = await todoSchema.updateOne({_id:id},
            {
                $set:{
                    name:rest
                }
            }
            )
    return data ? data : false;
    }catch(error){
        console.error(error)
        return error
    }

}
module.exports = updateMdl;
