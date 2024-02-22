const express = require("express");
const app = express();
const cors = require("cors");
const { errorHandling, notFound } = require("./middlewares");
require("./dbconnection").dbConnection();
const { todo,getTodo,deleteTodo,updateTodo} = require("./routes");

app.use(cors());
app.use(express.json());
app.use(      
  express.urlencoded({
    extended: true,
  })
);   
      
//routes
app.use("/todo", todo);
app.use("/getTodo",getTodo);
app.use("/deleteTodo",deleteTodo);
app.use("/updateTodo",updateTodo);

app.use("*", notFound);
app.use(errorHandling);
        
module.exports = app;
