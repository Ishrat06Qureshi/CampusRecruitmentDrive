import validator from "validator";
var formate = /^[a-zA-Z0-9#`.,/\s"-]*$/

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


const jobappValidatorFunction = ( data ) => {
   let errors = {} 
   if (data) {
            data.name = isEmpty( data.name) ? data.name : ""
            data.address = isEmpty( data.address) ? data.address : ""
            data.number = isEmpty( data.number) ? data.number : ""
            data.tagline = isEmpty( data.tagline) ? data.tagline: ""
            data.summary= isEmpty( data.summary) ? data.summary : ""
            data.education = isEmpty( data.education) ? data.education : ""
            data.hobbies = isEmpty( data.hobbies) ? data.hobbies : ""
            data. skills = isEmpty( data. skills) ? data. skills: ""

            if (validator.isEmpty(data.name)){
                errors.name= "name is required"
            }
            else if (!validator.isAlpha(data.name)){
                errors.name="please enter a valid name"

            }
            if (validator.isEmpty( data.address)){
                errors.address ="address is mandatory"
            }
            else if (!validator.isAlpha( data.addres )||!validator.isAlphanumeric( data.address , {min:6 , max:30}) )
            {
                errors.address="give a valid address"
            }

            if (validator.isEmpty( data.number)){
                errors.number ="number is mandatory"
            }
            else if (!validator.isNumeric( data.number , {min:11,max:11})  )
            {
                errors.number="give a valid number"
            }

            if (validator.isEmpty( data.tagline)){
                errors.tagline ="address is mandatory"
            }
            else if (!validator.tagline( data.tagline , {min:6 , max:30})  )
            {
                errors.tagline="your tag line must be not more than 30 characters"
            }

            if (validator.isEmpty( data.summary)){
                errors.summary ="tagline is mandatory"
            }
            else if (!validator.isAlpha( data.summary , {min:6 , max:50})  )
            {
                errors.summary="your tag line must be not more than 50 characters"
            }
            if (validator.isEmpty( data.education)){
                errors.education ="Education is mandatory"
            }
            else if (!validator.isAlpha( data.education , {min:6 , max:30})  )
            {
                errors.education ="your degree's name  must be not more than 30 characters"
            }


            if (validator.isEmpty( data.skills)){
                errors.skills ="skills is mandatory"
            }
            else if (!validator.tagline( data.skills , {min:6 , max:30})  )
            {
                errors.skills="your skill's name  must be not more than 30 characters"
            }

            if (validator.isEmpty( data.hobbies)){
                errors.skills ="hobbies is mandatory"
            }
            else if (!validator.isAlphanumeric( data.skills , {min:6 , max:30})  )
            {
                errors.skills="your skill's name  must be not more than 30 characters"
            }



   return {
       errors,
       isValid:CheckError(errors)
   }
}
}
