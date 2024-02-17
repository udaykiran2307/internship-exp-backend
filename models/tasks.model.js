const mongoose = require('mongoose');

// Define the schema for the model
const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  project: {
    type: String,
    required: true
  },
  branch:{
    type:String,
    required:true
  },
  pr_status: {
    type: String,
    required: true,
    default : "none"
  },
  merge_status:{
    type:String,
    required:true,
    default:"none"
  },
  test_status: {
    type: String,
    required: true,
    default: "none"
  },
  priority:{
   type: Number,
   required: true,
   default : 3
  }
 
});

// Create the Mongoose model using the schema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
