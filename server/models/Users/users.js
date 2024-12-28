import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    id:{
        type:String,
        required: true,
        unique: true,
    },
    
})