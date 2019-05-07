const mongoose =  require("mongoose")
const Schema = mongoose.Schema;
const JobPosting = new Schema({
    name:{
        type:String,
        required: [true , "name is required"]
    },
    city:{
        type:String,
        required: [true , "city is required"]
    },
    country:{
        type:String,
        required: [true , "country is required"]
    },
    number:{
        type:String,
        required: [true , "number is required"]
    },
    jobShift:{
        type:String,
        required: [true , "jobShift  is required"]
    },
    jobOverview:{
        type:String,
        required: [true , "jobOverview is required"]
    },
    department:{
        type:String,
        required: [true , " department is required"]
    },
    address:{
        type:String,
        required: [true , "address is required"]
    },
    minimumEducation:{
        type:String,
        required: [true , "minimumEducation is required"]
    },
    applyBefore:{
        type:String,
        required: [true , "applyBefore is required"]
    },
    postingDate:{
        type:String,
        required: [true , "postingDate is required"]
    },
    post:{
        type:String,
        required: [true , "post is required"]
    },
    totalPosition:{
        type:String,
        required: [true , "totalPosition is required"]
    },
    skills:{
        type:String,
        required: [true , "skills is required"]
    },
})
const Jobs = mongoose.model("Jobs" , JobPosting )
module.exports = Jobs