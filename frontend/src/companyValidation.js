import validator from "validator";
var formate = /^[a-zA-Z0-9#`.,/\s"-]*$/
var formate2 = /^[a-zA-Z0-9`,/\s"-]*$/
var formate3 = /^[a-zA-Z\s]*$/

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

const companyValidation = ( data ) => {
    console.log(data)
   let errors = {} 
   if (data) {
   data.name = isEmpty( data.name) ? data.name : ""
   data.address = isEmpty( data.address) ? data.address : ""
   data.email = isEmpty( data.email) ? data.email : ""
   data.password = isEmpty( data.password) ? data.password: ""
   data.companyIntro= isEmpty( data.companyIntro) ? data.companyIntro : ""
   data.Industry= isEmpty( data.Industry) ? data.Industry : ""
   data.totalNumberOfEmployees= isEmpty( data.totalNumberOfEmployees) ? data.totalNumberOfEmployees : ""


        if (validator.isEmpty(data.name)){
            errors.name= "name is required"
            
        }

            else if (formate3.test(data.name)=== false){
                errors.name="please enter a valid name"
            }  
        
        if (validator.isEmpty( data.address)){
            errors.address ="address is mandatory"
            
        }
           else if (!validator.isLength( data.address , {min:5 , max:50})){
            errors.address="your address must not be longer than 50  characters"
           
           }
            else if (checkAddress(data.address)=== false)
            {
                errors.address="give a valid address"
            }
      
            


            if (validator.isEmpty( data.Industry)){
                errors.Industry ="Industry is mandatory"
                
            }
               else if (!validator.isLength( data.Industry , {min:2 , max:30})){
                errors.Industry="your Industry must not be longer than 3o characters"
               
               }
                else if (TextChecker(data.Industry)=== false)
                {
                    errors.Industry="Industry field is not valid"
                }
          

                if (validator.isEmpty( data.totalNumberOfEmployees)){
                    errors.totalNumberOfEmployees ="total Number Of Employees is mandatory"
                }
                 else if (!validator.isLength( data.totalNumberOfEmployees , {min:2 })) {
                  errors.totalNumberOfEmployees="give a valid total Number Of Employees number"
                 }
                else if (!validator.isNumeric( data.totalNumberOfEmployees)  )
                {
                    errors.totalNumberOfEmployees="give a valid total Number Of Employees"
                }
        

            
      if (validator.isEmpty( data.companyIntro)){
        errors.companyIntro ="companyIntro is mandatory"
    }
  
    else if (!validator.isLength(data.companyIntro, {min:15,max:200})  )
    {
        errors.companyIntro="check your companyIntro "

    }
    else if(TextChecker(data.companyIntro)===false){
      errors.companyIntro="check your companyIntro"
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


        return {
            errors,
            isValid:CheckError(errors)
        }
    }  
}

export default  companyValidation