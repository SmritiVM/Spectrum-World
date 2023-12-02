const mongoose = require("mongoose");

const User_Schema = new mongoose.Schema({
    Email:{
        type: String,
        required:true,
        unique: true
    },
    Password:{
        type: String,
        required: true,
        unique: true
    },
    confirmpassword: {
        type: String,
        required: true,
    }
})

//collections

const new_reg = new mongoose.model("New_User", User_Schema);
module.exports = new_reg;