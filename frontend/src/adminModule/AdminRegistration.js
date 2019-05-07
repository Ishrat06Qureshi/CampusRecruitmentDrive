import React , { Component} from "react";
import { Button  , Card , Form } from 'react-bootstrap';

import companyValidation from "../companyValidation"
class AdminRegistration extends Component {
   state={
    name:"",
    email:"",
    password:"",

   }
    handleOnChange = ( event ) => {
        this.setState(
            ({
                [event.target.name]:event.target.value,
            })
        )
    }
    handleSubmit = ( event ) => {
            this.props.history.push("/studentAcces")
            event.preventDefault()
            
            // const {errors , isValid } = companyValidation( this.state )
            // console.log("erreos",errors,"isvalid", isValid)
            this.setState((prevState) => {
                return( {
                    name:"",
                    email:"",
                    password:"",
                   
                })
                })   
            //    if(errors.name){
            //         return alert(errors.name)
            //         }
              
            //     if (errors.email){
            //         return alert(errors.email)
            //     }
            //     if (errors.password){
            //         return alert(errors.password)
            //     }
               
            //     if (isValid===false){
            //        this.props.history.push("/Dashboard")
            //     }
    
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
export default AdminRegistration