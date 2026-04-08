import mongoose from "mongoose";

let dataSchema = mongoose.Schema({
    name: String,
    salary: {type:String,required:true},
    language: String,
    city: String,
    isManager: Boolean
})

export const employees = mongoose.model("employees", dataSchema)