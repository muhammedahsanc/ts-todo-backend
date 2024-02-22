const {todoSchema} = require("../schemas")

const getMdl = async ()=>{
    // try{
    const data = await todoSchema.find({})
    return data ? data:false
    // }catch(error){
    //     console.error(error);
    //     return error;
    // }
}

module.exports = getMdl