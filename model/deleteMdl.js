const {todoSchema} = require('../schemas')
const deleteMdl = async(id) =>{
    try{  
    const data = await todoSchema.deleteOne({_id:id});
    return data ? data : false;
    }catch(error){
        console.error(error);
        return error
    }
};
module.exports = deleteMdl;