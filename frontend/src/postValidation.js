import validator from "validator";
var formate = /^[a-zA-Z0-9#`.,/\s"-]*$/
var formate2 = /^[a-zA-Z0-9`,/\s".-]*$/
var formate3 = /^(((0[1-9]|[12][0-9]|30)[-/]?(0[13-9]|1[012])|31[-/]?(0[13578]|1[02])|(0[1-9]|1[0-9]|2[0-8])[-/]?02)[-/]?[0-9]{4}|29[-/]?02[-/]?([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00))$/
var formate4 = /^[a-zA-Z-,\s]*$/
const isEmpty = ( value ) => {
   return (value.length ? true : false)
}
const CheckError = ( data ) => {
  return (Object.keys(data ).length ? true : false)
}
 
const checkAddress = ( address ) => {
    if (validator.isAlphanumeric( address)){
        return false
    }
     if (validator.isAlpha(address))
     {
         return false
     }
     if(validator.isNumeric(address)){
         return false
     }
    if (!formate.test(address) ){
        return false
    }
  }
const TextChecker = ( text) => {
  if (validator.isNumeric(text))
  {
    return false
  }
 if(formate2.test(text)===false)
 {
   return false
 }

}



const postValidation = ( data ) => {
    console.log("formate test",formate3.test("31-02-2018"))
    let errors = {} 
    if (data) {
             data.name = isEmpty( data.name) ? data.name : ""
             data.address = isEmpty( data.address) ? data.address : ""
             data.number = isEmpty( data.number) ? data.number : ""
             data.city = isEmpty( data.city) ? data.city: ""
             data.country= isEmpty( data.country) ? data.country : ""
             data.jobOverview = isEmpty( data.jobOverview) ? data.jobOverview : ""
             data.minimumEducation = isEmpty( data.minimumEducation ) ? data.minimumEducation : ""
             data.jobShift = isEmpty( data.jobShift ) ? data.jobShift : ""
             data.department = isEmpty( data.department) ? data.department: ""
             data.applyBefore = isEmpty( data.applyBefore ) ? data.applyBefore : ""
             data.postingDate = isEmpty( data.postingDate ) ? data.postingDate : ""
             data.post = isEmpty( data.post) ? data.post: ""
             data.totalPosition = isEmpty( data.totalPosition) ? data.totalPosition: ""
             data.skills = isEmpty( data.skills) ? data.skills: ""
             
          

             if (validator.isEmpty(data.name)){
                errors.name= "name is required"
                
            }
    
            else if (formate4.test(data.name) === false ){
                errors.name="please enter a valid name"
            }


            if (validator.isEmpty( data.address)){
                errors.address ="address is mandatory"
                
            }
           
               else if (!validator.isLength( data.address , {min:5 , max:80})){
                errors.address="your address must not be longer than 3o characters"
               
               }
                else if (checkAddress(data.address)=== false)
                {
                    errors.address="give a valid address"
                }
 
                if (validator.isEmpty( data.number)){
                    errors.number ="number is mandatory"
                }
                 else if (!validator.isLength( data.number , {min:11 , max:11})) {
                  errors.number="give a valid number"
                 }
                else if (!validator.isNumeric( data.number)  )
                {
                    errors.number="give a valid number"
                }
        
 



                if (validator.isEmpty( data.jobOverview )){
                    errors.jobOverview ="jobOverview is mandatory"
                }
               
                else if (!validator.isLength( data.jobOverview , {min:6 , max:500})  )
                {
                    errors.jobOverview="your jobOverview should not contain more than 500 characters"
                }
           
                 else if(TextChecker(data.jobOverview)===false){
                   errors.jobOverview="check your jobOverview"
                 }


                 
                if (validator.isEmpty( data.skills)){
                    errors.skills ="jobOverview is mandatory"
                }
                
                else if (!validator.isLength( data.skills , {min:6 , max:120})  )
                {
                    errors.skills="your skills should not contain more than 120 characters"
                }
           
                 else if(TextChecker(data.skills)===false){
                   errors.skills="check your skills"
                 }
          
 


                 if (validator.isEmpty(data.post)){
                    errors.post= "post is required"
                    
                }
        
                  else if (formate4.test(data.post) === false ){
                        errors.post="please enter a valid name"
        
                    }
                    



                    if (validator.isEmpty(data.minimumEducation)){
                        errors.minimumEducation= "minimumEducation is required"
                        
                    }
            
                      else if (formate4.test(data.minimumEducation) === false){
                            errors.minimumEducation="please enter a valid Education"
            
                        }



                        if (validator.isEmpty(data.department)){
                            errors.department= "department is required"
                            
                        }
                
                          else if (formate4.test(data.department) === false ){
                                errors.department="please enter a valid department name"
                
                            }


                            

                            if (validator.isEmpty(data.jobShift)){
                                errors.jobShift= "jobShift is required"
                                
                            }
                    
                              else if (formate4.test(data.jobShift) === false){
                                    errors.jobShift="please enter a valid jobShift"
                    
                                }
               




                                if (validator.isEmpty( data.totalPosition)){
                                    errors.totalPosition ="totalPosition is mandatory"
                                }
                            
                                else if (!validator.isNumeric( data.totalPosition)  )
                                {
                                    errors.totalPosition="give a valid number of position"
                                }
                                else if (data.totalPosition >=500){
                                    errors.totalPosition="give a valid number of position"
                                }





                                if (validator.isEmpty(data.applyBefore)){
                                    errors.applyBefore= "last date is required"
                                    
                                }
                                
                        
                                else if (!formate3.test(data.applyBefore)){
                                        errors.applyBefore="date should be in correct formate like dd/mm/yyyy or dd-mm-yyyy"
                        
                                    }




                                    if (validator.isEmpty(data.postingDate)){
                                        errors.postingDate= "posting Date  is required"
                                        
                                    }
                                    
                            
                                    else if (!formate3.test(data.postingDate)){
                                            errors.postingDate="date should be in correct formate like dd/mm/yyyy or dd-mm-yyyy"
                            
                                        }



        return {
            errors,
            isValid:CheckError(errors)
        }
    }
 
 
}
export default postValidation