const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const itemSchema = new Schema({
     categoryId: {
          type: Schema.Types.ObjectId,
          ref: 'Categories',
          required: true
     },
     title:{
          type: String,
          required: true
     },
     description:{
          type: String,
          required: true
     },
     price: {
          type: Number,
          required: true
     },
     itemRemain: {
          type: String,
          required: true
     }
});

module.exports = mongoose.model("Items", itemSchema);