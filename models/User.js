const mongoose = require('mongoose');
const Scehma = mongoose.Schema;

//create schema

const UserSchema = new Scehma({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        avatar:{
            type:String
        },
        Date:{
            type:Date,
            default:Date.now
        }
});
module.exports=User = mongoose.model('users',UserSchema);