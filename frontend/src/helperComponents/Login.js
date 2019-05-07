import React , { Component} from "react"
import { Button  , Card , Form } from 'react-bootstrap';
import loginValidatorFunction from "../loginvalidation";


class Login extends Component
{

    state = {
        Email:"",
        password:"",
    
    }


     handleSubmit = ( event ) => {
            this.setState(
                ({
                    [event.target.name]:event.target.value,
                })
            )
   }

   dataValidator = ( event ) => {
    const { user } = this.props.history.location.state
        event.preventDefault()
        const {errors , isValid } = loginValidatorFunction( this.state )
        console.log(isValid)
        this.setState((prevState) => {
            return( {Email:"",
                password:"",
            })
            })   
           if(errors.Email){
                 return alert(errors.Email)
                }
            if (errors.password){
                 return alert(errors.password)
            }
            if (isValid===false){
            
                const { history } =  this.props
                switch(user) {
                case("Student"):
             
                 history.push("/Dashboard")
                 break
                 case("Company"):
               
                 history.push("/candidates")
     
             
                 break
                //  case("Admin"):
              
                    
                 
                 break
                 default:
                 break
                }
            }
            
}

      Register = (  event ) => {
          const { user } = this.props.history.location.state
          
          console.log("in login" , user)
          const { history } =  this.props
           switch(user) {
           case("Student"):
        
            history.push({
            pathname:"/candidateRegistration",
            state: { 
               user,
                  }
         })
            break
            case("Company"):
          
            history.push({
                pathname:"/companyRegistration",
                state: { 
                   user,
                      }
             })

        
            break
            case("Admin"):
         
            history.push({
                pathname:"/adminRegistration",
                state: { 
                   user,
                      }
             })
            
            break
            default:
            break
           }
           
      }
    render(){
        
        
         return(<div style={{height:"450px", width:"450px", marginLeft:"450px", marginTop:"50px"}}>
                <Card style = {{ width:"450px", height:"450px"}}>
                    <Card.Title style={{marginTop:"30px", marginLeft:"-15px"}}>
                        <h2>Sign In</h2>
                    </Card.Title>
                    <Form style={{ width:"400px" , height:"150px"}}>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}} >Email address</Form.Label>
                            <Form.Control type="email" value={this.state.Email} placeholder="Enter email" 
                            style={{marginLeft:"15px"}} name="Email" 
                            onChange={this.handleSubmit} />
                        </Form.Group>
             
                       <Form.Group controlId="formGroupPassword">
                            <Form.Label style={{marginTop:"30px", marginLeft:"-270px"}}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  value={this.state.password}
                            style={{marginLeft:"15px"}} 
                            name="password" 
                            onChange={this.handleSubmit}/>
                           
                      </Form.Group>

                      <Button variant="primary" onClick = { this.dataValidator}>Login</Button>
                       <div>
                       <p> Register yourself here</p>
                       <Button variant="primary" onClick = { this.Register}>Register</Button>
                           </div>
                      {/* <Loader/> */}
    
                    </Form>
               </Card>

            </div>)
    }
}



export default Login