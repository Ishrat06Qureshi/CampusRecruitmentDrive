import validator from "validator";
var formate = /^[a-zA-Z0-9#`.,/\s"-]*$/
var formate2 = /^[a-zA-Z0-9`,/\s"-]*$/
var formate3 = /^[a-zA-Z\s]*$/

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

const cvValidation = ( data ) => {
  
  console.log(data)
  let errors = {} 
   if (data) {
            data.name = isEmpty( data.name) ? data.name : ""
            data.address = isEmpty( data.address) ? data.address : ""
            data.number = isEmpty( data.number) ? data.number : ""
            data.tagline = isEmpty( data.tagline) ? data.tagline: ""
            data.summary= isEmpty( data.summary) ? data.summary : ""
            data.education = isEmpty( data.education) ? data.education : ""
            data.hobbies = isEmpty( data.hobbies) ? data.hobbies : ""
            data.skills = isEmpty( data.skills) ? data.skills: ""
            

            if (validator.isEmpty(data.name)){
              errors.name= "name is required"
              
          }
          else if (formate3.test(data.name)=== false){
            errors.name="please enter a valid name"
        }
          if (validator.isEmpty( data.address)){
              errors.address ="address is mandatory"
              
          }
          else if (!validator.isAlpha( data.address )  )
          {
              errors.address ="enter the valid input"
          }
             else if (!validator.isLength( data.address , {min:5 , max:30})){
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


        if (validator.isEmpty( data.tagline)){
          errors.tagline ="tagline is mandatory"
      }
      else if (!validator.isAlpha( data.tagline )  )
      {
          errors.tagline ="enter the valid input"
      }
      else if (!validator.isLength( data.tagline , {min:6 , max:30})  )
      {
          errors.tagline="your tag line should not contain more than 30 characters"
      }
 
       else if(TextChecker(data.tagline)===false){
         errors.tagline="check your tagline"
       }


      if (validator.isEmpty( data.summary)){
        errors.summary ="summary is mandatory"
    }
   
    else if (!validator.isLength(data.summary, {min:15,max:50})  )
    {
        errors.summary="check your summary "

    }
    else if(TextChecker(data.summary)===false){
      errors.summary="check your Summary"
    }
    

    
    if (validator.isEmpty( data.education)){
      errors.education ="Education is mandatory"
  }
  else if (!validator.isAlpha( data.education )  )
  {
      errors.education ="enter the valid input"
  }

  else if (!validator.isLength(data.education, {min:10,max:50})  )
    {
        errors.education="check your accademics field "

    }
  else if(TextChecker(data.education)===false){
    errors.education="check your accademics field"
  }


  if (validator.isEmpty( data.skills)){
      errors.skills ="skills is mandatory"
  }
  else if (!validator.isAlpha( data.skills)  )
  {
      errors.skills="your skill's name  must be not more than 30 characters"
  }
       else if (!validator.isLength( data.skills , {min:6 , max:20})  )
      {
          errors.skills="check your skills field"
      }

  else if(TextChecker(data.skills)===false){
    errors.skills="check your  skills field "
  }



  if (validator.isEmpty( data.hobbies)){
      errors.hobbies ="hobbies is mandatory"
  }
  else if (!validator.isAlpha( data.hobbies)  )
  {
      errors.hobbies="check your hobbies field"
  }
       else if (!validator.isLength( data.hobbies , {min:6 , max:20})  )
      {
          errors.hobbies="check your hobbies field"
      }
  else if(TextChecker(data.hobbies)===false){
    errors.hobbies="check your accademics skills"
  }
 
        return {
          errors,
          isValid:CheckError(errors)
      }
}
}

export default cvValidation