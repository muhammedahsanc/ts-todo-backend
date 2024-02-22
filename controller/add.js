const { addMdl } = require("../model");
const addData = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) throw new Error("Please make sure that fields are not empty!!");
    const data = await addMdl(req.body);
    if (data instanceof Error) throw new Error("Something went wrong");
    return res 
      .status(200) 
      .json({ message: "Successfully Completed", data: [] });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
module.exports = addData;
