const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({

  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  status: {
     type: String, 
     default: 'pending', 
     enum: ['pending', 'in-progress', 'completed'] 
    },
}, { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);

