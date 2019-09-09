const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new Schema({
  name:{
    type: String
  },
  email:{
    type: String,
    unique: true
  },
  contact_number:{
    type: Number,
  },
  message:{
    type: String
  }
},{
  collection: 'quoteRegister'
});

module.exports = mongoose.model('Form', Form);
