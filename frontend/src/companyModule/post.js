import React , { Component } from "react";
import { Button  , Card , Form , Col} from 'react-bootstrap';
import { withRouter} from "react-router";
import postValidation from "../postValidation"
import axios from "axios";
class Post extends Component {
  state={
    name:"",
    city:"",
    country:"",
    number:"",
    jobOverview:"",
    jobShift:"",
    department:"",
    address:"",
    minimumEducation:"",
    applyBefore:"",
    postingDate:"",
    post:"",
    totalPosition:"",
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
           const {errors ,isValid}=postValidation( this.state )
           console.log(isValid)
           console.log(this.state)
           if(!isValid){
               axios.post("/jobs", this.state).then(( response ) =>{
                   
                   if(response.status === 200) {
            
                       this.setState(({
                        name:"",
                        city:"",
                        country:"",
                        number:"",
                        jobOverview:"",
                        jobShift:"",
                        department:"",
                        address:"",
                        minimumEducation:"",
                        applyBefore:"",
                        postingDate:"",
                        post:"",
                        totalPosition:"",
                        skills:"",
                    
                       }))
                       alert("your response have been submitted")
                   }
               })
           }
          else{
              if(errors.name){
                   return alert(errors.name)
                   }
               if (errors.address){
                   return alert(errors.address)
               }
               if (errors.number){
                   return alert(errors.number)
               }
               if (errors.city){
                   return alert(errors.city)
               }
               if (errors.country){
                   return alert(errors.country)
               }
               if (errors.jobOverview){
                   return alert(errors.jobOverview)
               }
               if (errors.jobShift){
                   return alert(errors.jobShift)
               }
               if (errors.skills){
                   return alert(errors.skills)
               }


               if (errors.department){
                return alert(errors.department)
            }
                if (errors.minimumEducation){
                    return alert(errors.minimumEducation)
                }
                if (errors.applyBefore){
                    return alert(errors.applyBefore)
                }
                if (errors.post){
                  return alert(errors.post)
              }
              if (errors.totalPosition){
                  return alert(errors.totalPosition)
              }
              if (errors.postingDate){
                  return alert(errors.postingDate)
              }
            }
   }
   render() {
   return(<div>
                 <Card style = {{ width:"800px", height:"900px" , marginLeft:"350px"}}>
                        <Card.Title style={{marginTop:"30px", marginLeft:"-15px"}}>
                               <h2>Post Application</h2>
                         </Card.Title>
                   
                   <Form style={{ width:"600px" , height:"900px"}}>
                   <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail" style={{marginLeft:"25px"}}>
                                <Form.Label style={{marginTop:"30px" ,marginLeft:"-50px"}} >Oraganisation Name </Form.Label>
                                <Form.Control type="name" placeholder="organisation name" 
                                style={{ textAlign:"center" ,}} 
                                name="name" 
                                value={this.state.name}
                                onChange={ this.handleOnChange}/>  
                                
                   </Form.Group>
     
                    <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label style={{marginTop:"30px",marginLeft:"100px"}}>city</Form.Label>
                                <Form.Control type="text" placeholder="city "  
                                style={{textAlign:"center",marginLeft:"50px"}} 
                                name="city" 
                                value={this.state.city}
                                onChange={this.handleOnChange}/>  
                    </Form.Group>
   
                </Form.Row>
        <Form.Row>
            <Form.Group style={{marginLeft:"25px"}}>
                        <Form.Label style={{marginTop:"5px"}}>country</Form.Label>
                        <Form.Control type="text" placeholder="country "  
                        style={{textAlign:"center"  , marginLeft:"5px"}} 
                        value={this.state.country}
                        name="country" onChange={ this.handleOnChange}/> 
            </Form.Group>
      <Form.Group style={{marginLeft:"25px"}}>
      <Form.Label style={{marginTop:"10px",marginLeft:"180px"}}>Contact Number</Form.Label>
        <Form.Control type="text" placeholder=" Company's contact Number"  
        style={{textAlign:"center",marginLeft:"110px" }}
        name="number" 
        onChange={ this.handleOnChange}
        value={this.state.number}
        />
      </Form.Group>
  </Form.Row>
  <Form.Row>
            <Form.Group style={{marginLeft:"25px"}}>
                        <Form.Label style={{marginTop:"10px",}}>job Overview</Form.Label>
                        <Form.Control type="text" placeholder="Job decription "  
                        style={{textAlign:"center" }} 
                        name="jobOverview" 
                        value={this.state.jobOverview}
                        onChange={ this.handleOnChange}/> 
            </Form.Group>
      <Form.Group style={{marginLeft:"25px"}}>
      <Form.Label style={{marginTop:"10px",marginLeft:"180px"}}>job Shift</Form.Label>
        <Form.Control type="text" placeholder="job Shift"  
        style={{textAlign:"center",marginLeft:"115px" }}
        name="jobShift"
        value={this.state.jobShift}
         onChange={ this.handleOnChange}
        />
      </Form.Group>
  </Form.Row>
  <Form.Row>
            <Form.Group style={{marginLeft:"25px"}}>
                        <Form.Label style={{marginTop:"10px",}}>department</Form.Label>
                        <Form.Control type="text" placeholder="Department "  
                        style={{textAlign:"center" }} 
                        name="department" 
                        value={this.state.department}
                        onChange={ this.handleOnChange}/> 
            </Form.Group>
      <Form.Group style={{marginLeft:"25px"}}>
      <Form.Label style={{marginTop:"10px",marginLeft:"180px"}}>job Location</Form.Label>
        <Form.Control type="text" placeholder="job Location"  
        style={{textAlign:"center",marginLeft:"112px" }}
        name="address"
        value={this.state.address}
         onChange={ this.handleOnChange}
        />
      </Form.Group>
  </Form.Row>
  <Form.Row>
            <Form.Group style={{marginLeft:"25px"}}>
                        <Form.Label style={{marginTop:"10px",}}>minimumEducation</Form.Label>
                        <Form.Control type="text" placeholder="Qualification of candidate"  
                        style={{textAlign:"center" }} 
                        name="minimumEducation"
                        value={this.state.minimumEducation}
                         onChange={ this.handleOnChange}/> 
            </Form.Group>
      <Form.Group style={{marginLeft:"25px"}}>
      <Form.Label style={{marginTop:"10px",marginLeft:"180px"}}>apply Before</Form.Label>
        <Form.Control type="text" placeholder="last date to apply"  
        style={{textAlign:"center",marginLeft:"110px" }}
        name="applyBefore"
        value={this.state.applyBefore}
         onChange={ this.handleOnChange}
        />
      </Form.Group>
</Form.Row>
<Form.Row>
      <Form.Group style={{marginLeft:"10px"}}>
      <Form.Label style={{marginTop:"10px",marginLeft:"20px"}}>Posting Date</Form.Label>
        <Form.Control type="text" placeholder="posting Date"  
        style={{textAlign:"center",marginLeft:"15px" }}
        name="postingDate"
        value={this.state.postingDate}
        onChange={ this.handleOnChange}
        />
      </Form.Group>
      
  
            <Form.Group style={{marginLeft:"25px"}}>
                        <Form.Label style={{marginTop:"10px",marginLeft:"180px"}}>position</Form.Label>
                        <Form.Control type="text" placeholder="post "  
                        style={{textAlign:"center" , marginLeft:"110px"}} 
                        name="post" 
                        value={this.state.post}
                        onChange={ this.handleOnChange}/> 
            </Form.Group>
      <Form.Group style={{marginLeft:"25px" }}>
      <Form.Label style={{marginLeft:"10px"}}>total Position</Form.Label>
        <Form.Control type="text" placeholder="total number of positions"  
        style={{textAlign:"center",marginLeft:"-3px" }}
        name="totalPosition" 
        value={this.state.totalPosition}
        onChange={ this.handleOnChange}
        />
      </Form.Group>
    
    
      <Form.Group style={{marginLeft:"25px"}}>
      <Form.Label style={{marginTop:"10px",marginLeft:"180px"}}>skills</Form.Label>
        <Form.Control type="text" placeholder="required skills"  
        style={{textAlign:"center",marginLeft:"110px" }}
        name="skills" 
        value={this.state.skills}
        onChange={ this.handleOnChange}
        />
      </Form.Group>
  </Form.Row>
                   </Form> 
                   <Button variant="primary" 
                   style={{width:"80px", height:"50px", marginBottom:"50px" , marginLeft:"250px"}}
                   onClick = { this.handleSubmit}>submit</Button>  
    </Card> 
     
   </div>)
   }
}
export default Post



// { "name":"hascol",
//     "city":"karachi",
//     "country":"pakistan",
//     "number":"03169990910,
//     "jobOverview":"we are looking for a passionate engineer who has a thrist of seeking knowledge, can work with team and also assist the juniors when required"
//     "jobShift":"morning
//     "department":"productionn"
//     "address":"plot # 4 , qasimabad near garden"
//     "minimumEducation":"Bachelors of engineering  in petroleum"
//     "applyBefore":"23-05-2019
//     "postingDate":"15-04-2019"
//     "post":"trainee Engineer"
//     "totalPosition":"5,
//     "skills":"production skills "}