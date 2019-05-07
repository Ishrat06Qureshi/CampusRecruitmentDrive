import validator from "validator";


const isEmpty = ( value ) => {
   return (value.length ? true : false)
}
const CheckError = ( data ) => {
  return (Object.keys(data ).length ? true : false)
}
 

const loginValidatorFunction = ( data ) => {
   let errors = {} 
   if (data) {
   data.email = isEmpty( data.Email) ? data.Email : ""
   data.password = isEmpty( data.password) ? data.password : ""

   if (validator.isEmpty(data.Email)){
       errors.Email= "email is required"
   }
   else if (!validator.isEmail(data.Email)){
       errors.Email="please enter a valid email"

   }
   if (validator.isEmpty( data.password)){
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

export default  loginValidatorFunction