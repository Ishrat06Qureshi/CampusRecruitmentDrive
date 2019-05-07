import React , { Component } from "react"
import { Button  , Card } from 'react-bootstrap';
import imgStudent from "./media/image.jpg"
import imgcompany from "./media/company.jpg"
import imgadmin from "./media/admin.jpg"


import loginValidatorFunction from "./loginvalidation"
const Home = ( props ) => {
    loginValidatorFunction()
    return(<div style={{display:"flex" , marginLeft:"200px" , justifyContent:"space-between" , width:"900px"}}>
        <FlashCard props ={props} img={imgStudent}  user = "Student"  text ="have you take your position in this campus recruitment drive ? more than 1000 students have already in"/>
        <FlashCard props={props} img={imgcompany}  user = "Company"  text ="we believe in shaping the future via bringing new talent to the youth"/>
        <FlashCard props={props} img={imgadmin}  user = "Admin"  text ="I believe in providing quality services and long term support"/>
    </div>)
}


const handleClick = (props , user) => {
   props.history.push({
        pathname:"/login",
        state: { 
            user,
        }
    })
}
 const FlashCard = ( {img , user  , text , props}) => {
    
      console.log(props.location.state)
     return(<div>
         <Card style={{ width: '18rem' , height:"400px"}}>
        <Card.Img variant="top" src={`${img}`}  style={{height:"200px" }}/>
        <Card.Body>
    
       <Card.Text> 
           {text}
    </Card.Text>
    {console.log(props)}
     <Button variant="primary" onClick = {( )=>handleClick(props, user)}> continue as { user } </Button>
    
  </Card.Body>
</Card>;
     </div>)
 } 

 
 export default Home 