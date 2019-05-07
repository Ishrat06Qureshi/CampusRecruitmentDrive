const validator = require("validator")
var formate2 = /^[a-zA-Z0-9`,/\s"-]*$/
var formate = /^[a-zA-Z0-9#`.,/\s"-]*$/

const isEmpty = ( value ) => {
    console.log(value)
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

const TextChecker = ( text ) => {
    if (validator.isNumeric(text))
    {
      return false
    }
   if(formate2.test(text)===false)
   {
     return false
   }
  
  }


const candidateValidation = ( data ) => {
    console.log(data)
   let errors = {} 
  
   if (data) {
   data.name = isEmpty( data.name) ? data.name : ""
   data.address = isEmpty( data.address) ? data.address : ""
   data.email = isEmpty( data.email) ? data.email : ""
   data.password = isEmpty( data.password) ? data.password: ""
   data.degree= isEmpty( data.degree) ? data.degree : ""
   data.tagline = isEmpty( data.tagline) ? data.tagline: ""
 
    console.log(isEmpty(data.name)) 
  


        if (validator.isEmpty(data.name)){
            errors.name= "name is required"
            
        }

          else if (!validator.isAlpha(data.name)){
                errors.name="please enter a valid name"

            }
        if (validator.isEmpty( data.address)){
            errors.address ="address is mandatory"
            
        }
           else if (!validator.isLength( data.address , {min:12 , max:30})){
            errors.address="your address must not be longer than 3o characters"
           
           }
            else if (checkAddress(data.address)=== false)
            {
                errors.address="give a valid address"
            }
        if (!isEmpty( data.degree)){
            errors.degree ="degree is mandatory"
        }
            else if (!validator.isAlpha( data.degree ) )
            {
                errors.degree="please input a valid degree"
            }

        if (!isEmpty(data.email)){
                errors.email= "email is required"
        }
            else if (!validator.isEmail(data.email)){
                errors.email="please enter a valid email"

            }
        if (!isEmpty( data.password)){
            errors.password ="cant leave password blank"
        }
            else if (!validator.isLength( data.password , {min:6 , max:30}))
            {
                errors.password="you password must be in range between 6 to 30 characters"
            }
            if (validator.isEmpty( data.tagline)){
                errors.tagline ="tagline is mandatory"
            }
            else if (validator.isNumeric( data.tagline )  )
            {
                errors.tagline ="enter the valid input"
            }
            else if (!validator.isLength( data.tagline , {min:6 , max:30})  )
            {
                errors.tagline="your tag line should not contain more than 30 characters"
            }
       
             else if(TextChecker(data.tagline )===false){
               errors.tagline="check your tagline"
             }
      

        return {
            errors,
            isValid:CheckError(errors)
        }
    }  
}

module.exports=candidateValidation