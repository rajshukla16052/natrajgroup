const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/natrajgroup', {useNewUrlParser: true,});
var conn = mongoose.Collection;


var userSchema =new mongoose.Schema({

    username: {type:String, 
      required: true 
         },
    email:  {
      type:String, 
      required: true,
      index: {
          unique: true, 
      },
      match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  
    },
    password:  {
      type:String, 
      required: true
  },
  role:  {
    type:String, 
    required: true
},
 
  date:{
    type: Date, 
    default: Date.now }
  });
  
  
var userModel = mongoose.model('Users',userSchema)
module.exports = userModel;