const mongoose =  require("mongoose")
const Schema = mongoose.Schema;
const CompanyRegistrationSchema = new Schema({
    name:{
        type:String,
        required: [true , "name is required"]
    },
    companyIntro:{
        type:String,
        required: [true , "companyIntro is required"]
    },
    address:{
        type:String,
        required: [true , "address is required"]
    },

    email:{
        type:String,
        required: [true , "email is required"]
    },
    password:{
        type:String,
        required: [true , "password is required"]
    },
    Industry:{
        type:String,
        required: [true , "Industry is required"]
    },
    totalNumberOfEmployees:{
        type:String,
        required: [true , "totalNumberOfEmployees is required"]
    },
})
const RegisteredCompanies = mongoose.model("CompanyRegistration" , CompanyRegistrationSchema )
module.exports = RegisteredCompanies