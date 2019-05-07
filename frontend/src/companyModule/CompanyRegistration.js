import React , { Component} from "react";
import { Button  , Card , Form } from 'react-bootstrap';
import axios from "axios"
import companyValidation from "../companyValidation"
class Companysignup extends Component {
   state={
    name:"",
    companyIntro:"",
    address:"",
    email:"",
    password:"",
    Industry:"",
    totalNumberOfEmployees:"",

   }
    handleOnChange = ( event ) => {
        this.setState(
            ({
                [event.target.name]:event.target.value,
            })
        )
    }
    handleSubmit = ( event ) => {
            event.preventDefault()
            console.log(this.state)
            const {errors , isValid } = companyValidation( this.state )
            console.log("erreos",errors,"isvalid", isValid)
            const {user} = this.props.history.location.state
            if(isValid === false){
                axios.post("/companyRegistration" , this.state).
                then(( response, error )=>   {
                    console.log(response)
                    if(response){
                    if(response.status === 200){
                       this.props.history.push({
                           pathname:"/login",
                           state: { 
                               user,
                           }
                       })
                   }
                     if (response.status === 400) {
                        response.json().then(()=> console.log("bad request"))
                        
                     }
                  
                }
               
            })
            }  
               if(errors.name){
                    return alert(errors.name)
                    }
                if (errors.address){
                    return alert(errors.degree)
                }
                if (errors.number){
                    return alert(errors.address)
                }
                if (errors.email){
                    return alert(errors.email)
                }
                if (errors.password){
                    return alert(errors.password)
                }
                if (errors.Industry){
                    return alert(errors.password)
                }
                if (errors.companyIntro){
                    return alert(errors.password)
                }
                if (errors.totalNumberOfEmployees){
                    return alert(errors.password)
                }
               
               
                
    }
    render() {
    return(<div>
       <Card style = {{ width:"500px", height:"750px" , marginLeft:"350px"}}>
                    <Card.Title style={{marginTop:"30px", marginLeft:"-15px"}}>
                        <h2>Campus Recruitment Drive</h2>
                    </Card.Title>
                    <div></div>
                    <Form style={{ width:"400px" , height:"150px"}}>
                        <Form.Group controlId="formGroup">
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}} >Name</Form.Label>
                            <Form.Control type="text" placeholder="Your name" 
                            style={{ textAlign:"center" ,marginLeft:"30px"}} name="name" onChange={ this.handleOnChange}
                             /> 
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>company Intro</Form.Label>
                            <Form.Control type="text" placeholder="Brief company introduction"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="companyIntro" 
                            onChange={this.handleOnChange}/> 


                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>Industry</Form.Label>
                            <Form.Control type="text" placeholder="Industry your company targets to"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="Industry" 
                            onChange={this.handleOnChange}/> 
                             
                             <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>Number of Employees</Form.Label>
                            <Form.Control type="text" placeholder="total number of employees in your company"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="totalNumberOfEmployees" 
                            onChange={this.handleOnChange}/> 

                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}>Address</Form.Label>
                            <Form.Control type="text" placeholder="address"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="address" onChange={ this.handleOnChange}
                            /> 
                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}>Email</Form.Label>
                            <Form.Control type="email" placeholder="enter your email address"  
                            style={{textAlign:"center",marginLeft:"30px" }}
                            name="email" onChange={ this.handleOnChange}
                            />
                             <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>password</Form.Label>
                            <Form.Control type="password" placeholder="password"  
                            style={{textAlign:"center" ,marginLeft:"30px"}} 
                            name="password" onChange={ this.handleOnChange}
                            />
                            
                     
            
                      <Button variant="primary" style={{marginTop:"30px"}}onClick = { this.handleSubmit}>Register</Button>
                      </Form.Group>
                    </Form>
               </Card>
    </div>)
    }
}
export default  Companysignup