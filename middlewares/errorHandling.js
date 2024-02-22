require("dotenv").config();
const ErrorHandlingMiddleware = (err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: process.env.ENVIRONMENT == "development" ? err.stack : null,
  });
};
module.exports = ErrorHandlingMiddleware;

