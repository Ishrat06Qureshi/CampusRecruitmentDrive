const mongoose =  require("mongoose")
const Schema = mongoose.Schema;
const CandidateRegistrationSchema = new Schema({
    name:{
        type:String,
        required: [true , "name is required"]
    },
    degree:{
        type:String,
        required: [true , "degree is required"]
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
    tagline:{
        type:String,
        required: [true , "password is required"]
    },
})
const RegisteredCandidates = mongoose.model("CandidateRegistration" , CandidateRegistrationSchema)
module.exports= RegisteredCandidates