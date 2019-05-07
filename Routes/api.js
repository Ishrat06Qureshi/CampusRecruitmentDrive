const express = require("express")
const router= express.Router();
const RegisteredCandidates = require("../Models/CandidateRegistration")
const RegisteredCompanies = require("../Models/CompanyRegistration")
const Jobs = require("../Models/JobPosting")

router.post("/candidateRegistration", ( req , res ) => {
  
        RegisteredCandidates.findOne({email:req.body.email}).
        then((user) => {
            if (user){
                console.log("email error")
                return res.sendStatus(400)
                 
            }
            else{
                RegisteredCandidates.create(req.body).
                then((user) => {
                    res.status(200).send("successfully registered")
                    return
                
                })
            }
        })
        
        
     
})
router.get("/candidateRegistration",( req,res) => {
    RegisteredCandidates.find({}).then(( data )=>{
        if(data){
            res.status(200).send(data)
         }
         else{
             res.status(404).send(json({Error:"no data found"}))
         }
    })
    
})   


router.delete("/candidateRegistration/:id",( req,res) => {
    
    RegisteredCandidates.findByIdAndRemove({_id:req.params.id}).then(( data )=>{
      res.status(200).send(data)
    })
    
})  


router.post("/companyRegistration", ( req , res ) => {
  
    RegisteredCompanies.findOne({email:req.body.email}).
    then((user) => {
        if (user){
            console.log("email error")
             res.status(400).json({email:"email already exist"})
             return
        }
    })
    RegisteredCompanies.create(req.body).
    then((user) => {
        res.status(200).send("successfully registered")
        return
    
    })
 
})

router.get("/companyRegistration",( req,res) => {
    RegisteredCompanies.find({}).then(( data )=>{
        if(data){
            res.status(200).send(data)
         }
         else{
             res.status(404).send(json({Error:"no data found"}))
         }
    })
    
})


router.delete("/companyRegistration/:id",( req,res) => {
    
    RegisteredCompanies.findByIdAndRemove({_id:req.params.id}).then(( data )=>{
      res.status(200).send(data)
    })
    
})  

router.get("/jobs",( req,res) => {
    Jobs.find({}).then(( data )=>{
        if(data){
            res.status(200).send(data)
         }
         else{
             res.status(404).send(json({Error:"no data found"}))
         }
    })
    
})  

router.post("/jobs", ( req , res ) => {
  
    
    Jobs.create(req.body).
    then((user) => {
        res.status(200).send("successfully registered")
        return
    
    })
 
})


router.delete("/jobs/:id",( req,res) => {
    Jobs.findByIdAndRemove({_id:req.params.id}).then(( data )=>{
      res.send(" its done")
    })
    
})  

router.get("/jobs", ( req , res ) => {
  
   
    RegisteredCompanies.find({}).
    then((jobs) => {
        res.status(200).send( jobs)
        return
    
    })
 
})



module.exports = router