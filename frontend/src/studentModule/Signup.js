import React , { Component} from "react";
import { Button  , Card , Form } from 'react-bootstrap';
import axios from "axios"
import candidateValidation from "../Candidatevalidation"
class Candidatesignup extends Component {
   state={
    name:"",
    degree:"",
    address:"",
    email:"",
    password:"",
    tagline:"",

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
            const {user} = this.props.history.location.state
            console.log("in sigup",user)
            const {errors , isValid } = candidateValidation( this.state )
             if(isValid === false){
                 axios.post("/candidateRegistration" , this.state).
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
            else{
               if(errors.name){
                   console.log()
                    return alert(errors.name)
                    }
                if (errors.degree){
                    return alert(errors.degree)
                }
                if (errors.address){
                    return alert(errors.address)
                }
                if (errors.email){
                    return alert(errors.email)
                }
                if (errors.password){
                    return alert(errors.password)
                }
                if (errors.tagline){
                    return alert(errors.tagline)
                }
               
    
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
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>Degree</Form.Label>
                            <Form.Control type="text" placeholder="your most reacent Education"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="degree" 
                            onChange={this.handleOnChange}/> 
                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}>Address</Form.Label>
                            <Form.Control type="text" placeholder="address"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="address" onChange={ this.handleOnChange}
                            /> 
                             <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}>Brief Introduction</Form.Label>
                            <Form.Control type="text" placeholder="enter your brief introduction like React developer"  
                            style={{textAlign:"center",marginLeft:"30px" }}
                            name="tagline" onChange={ this.handleOnChange}
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
export default Candidatesignup