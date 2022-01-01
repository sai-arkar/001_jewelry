const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
     title:{
          type: String,
          required: true
     }
});

module.exports = mongoose.model("Categories", categoriesSchema);