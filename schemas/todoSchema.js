const { Schema, model, Types } = require("mongoose");
require("dotenv").config();
const schemaData = new Schema(
  {
    name: String,
  },
  {
    timestamps: true,
  }
);
module.exports = model(process.env.todoCollection,schemaData);
