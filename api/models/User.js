<<<<<<< HEAD
const mongoose = require('mongoose')
const {Schema, model}= mongoose;

const UserSchema = new Schema({
    username:{type: String, required:true, unique: true},
    password:{type: String, required:true, min:4}
})

const UserModel= model('User', UserSchema);

=======
const mongoose = require('mongoose')
const {Schema, model}= mongoose;

const UserSchema = new Schema({
    username:{type: String, required:true, unique: true},
    password:{type: String, required:true, min:4}
})

const UserModel= model('User', UserSchema);

>>>>>>> 806cc2dc5bf708c84dc0e74245fc734fb40315b1
module.exports=UserModel;