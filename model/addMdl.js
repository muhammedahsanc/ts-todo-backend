const { todoSchema } = require("../schemas");
const addMdl = async ({ name }) => {
  try {
    const data = await todoSchema.create({ name });
    return data ? data : false;
  } catch (error) {
    console.error(error);
    return error;
  }
};
module.exports = addMdl;
