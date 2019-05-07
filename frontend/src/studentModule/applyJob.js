import React , { Component} from "react";
import { Button  , Card , Form } from 'react-bootstrap';
import cvValidation from "../cvValidation"
class Applyjob extends Component {
   state={
       name:"",
       address:"",
       number:"",
       tagline:"",
       summary:"",
       education:"",
       hobbies:"",
       skills:"",

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
            // const {errors , isValid } = resumeValidatorFunction( this.state )
            // console.log(isValid)
            // this.setState((prevState) => {
            //     return( {
            //         name:"",
            //         address:"",
            //         number:"",
            //         tagline:"",
            //         summary:"",
            //         education:"",
            //         hobbies:"",
            //         skills:"",
            //     })
            //     })   
            //    if(errors.name){
            //         return alert(errors.name)
            //         }
            //     if (errors.address){
            //         return alert(errors.address)
            //     }
            //     if (errors.number){
            //         return alert(errors.number)
            //     }
            //     if (errors.tagline){
            //         return alert(errors.tagline)
            //     }
            //     if (errors.summary){
            //         return alert(errors.summary)
            //     }
            //     if (errors.education){
            //         return alert(errors.education)
            //     }
            //     if (errors.hobbies){
            //         return alert(errors.hobbies)
            //     }
            //     if (errors.skills){
            //         return alert(errors.skills)
            //     }
            //     if (isValid===false){
            //        this.props.history.push("/Dashboard")
            //     }
            const {errors , isValid}=cvValidation( this.state )
            console.log(errors,isValid)
    
    }
    render() {
    return(<div>
       <Card style = {{ width:"500px", height:"900px" , marginLeft:"350px"}}>
                    <Card.Title style={{marginTop:"30px", marginLeft:"-15px"}}>
                        <h2>Job Application</h2>
                    </Card.Title>
                    <div></div>
                    <Form style={{ width:"400px" , height:"150px"}}>
                        <Form.Group controlId="formGroup">
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}} >Name</Form.Label>
                            <Form.Control type="name" placeholder="Your name" 
                            style={{ textAlign:"center" ,marginLeft:"30px"}} name="name" onChange={ this.handleOnChange}
                             /> 
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>address</Form.Label>
                            <Form.Control type="text" placeholder="your address"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="address" 
                            onChange={this.handleOnChange}/> 
                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}>contact Number</Form.Label>
                            <Form.Control type="text" placeholder="contact number"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="number" onChange={ this.handleOnChange}
                            /> 
                            <Form.Label style={{marginTop:"30px", marginLeft:"-250px"}}>Brief Introduction</Form.Label>
                            <Form.Control type="text" placeholder="enter your brief introduction like React developer"  
                            style={{textAlign:"center",marginLeft:"30px" }}
                            name="tagline" onChange={ this.handleOnChange}
                            />
                             <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>Summary</Form.Label>
                            <Form.Control type="text" placeholder="An exciting Summary to attract recruiters "  
                            style={{textAlign:"center" ,marginLeft:"30px"}} 
                            name="summary" onChange={ this.handleOnChange}
                            />
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>Accademic</Form.Label>
                            <Form.Control type="text" placeholder="your most recent education"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="education" onChange={ this.handleOnChange}
                            />
                            <Form.Label style={{marginTop:"30px", marginLeft:"-300px"}}>Hobbies</Form.Label>
                            <Form.Control type="text" placeholder="how you spend your day"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="hobbies" onChange={ this.handleOnChange}
                            />
                            <Form.Label style={{marginTop:"30px", marginLeft:"-320px"}}>Skills</Form.Label>
                            <Form.Control type="text" placeholder="your dominent Skills"  
                            style={{textAlign:"center",marginLeft:"30px"}} 
                            name="skills" onChange={ this.handleOnChange}
                            />
                     
            
                      <Button variant="primary" style={{marginTop:"30px"}}onClick = { this.handleSubmit}>Login</Button>
                      </Form.Group>
                    </Form>
               </Card>
    </div>)
    }
}
export default Applyjob