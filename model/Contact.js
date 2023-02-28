const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
    required:true
    },
    lastName:{
        type:String,
    required:true
    },
    email:{type:String,
    required:true
} ,
    phone: {type:String,
        required:true
    },
});


const contacts=new mongoose.model('contacts',contactSchema);

module.exports=contacts;