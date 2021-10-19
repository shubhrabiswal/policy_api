const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config()


module.exports.db = mongoose.createConnection(//connect(
    process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })