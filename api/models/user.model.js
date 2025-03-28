const mongoose = require('mongoose');

const userSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
        },//User Model
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        profilePicture:{
            type:String,
            default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
        },
        isAdmin:{
            type:Boolean,
            default:false,
        },
    },
    {timestamps:true}
)

module.exports=mongoose.model('User',userSchema)
