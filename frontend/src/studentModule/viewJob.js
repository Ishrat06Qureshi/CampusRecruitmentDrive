import React from "react"
import { Button  , Card , Table} from 'react-bootstrap';
import { withRouter} from "react-router"
// import Companylogo from ""

const handleOnClick = ( history ) => {

    history.push("/ApplyJob")
}
const Viewjob = ( props ) => {
     const { history } = props
      const { job } = history.location.state
      console.log(job)
    
  
      
    return(<div>
    
      
      

        <div>
                <Card  style={{maxWidth:"1000px"}}>
                <Card.Body >
                    <Card.Text style={{marginLeft:"-480px" ,fontWeight:"bold", fontSize:"15px" , textTransform:"capitalize" }}> {job.post} </Card.Text>
                    <Card.Text style={{marginLeft:"-420px" , textTransform:"capitalize" , color:"#0066ff"}}> {job.name},{job.city} , {job.country} </Card.Text> 
                    <div>
                        <Card.Text  style={{marginLeft:"-450px", fontWeight:"bold", fontSize:"15px" , }}>Job Overview</Card.Text>
                       <p style={{maxWidth:"600px" , textAlign:"left" ,marginLeft:"350px" }}> 
                           {job.jobOverview}
                        </p>
                    </div>
                    <div>
                        <Card.Text  style={{marginLeft:"-450px", marginTop:"50px" , fontWeight:"bold", fontSize:"15px" }} > Job Description </Card.Text>
                        <Table borderless style={{marginLeft:"50px" , width:"500px" , marginLeft:"315px"}}>
                            <tbody>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px" , color:"#808080"}}>Total Positions</td>
                                        <td>{job.totalPosition}</td> 
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px", color:"#808080"}}>Job Shift</td>
                                        <td>{job.jobShift}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Department</td>
                                        <td>{ job.department }</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Job Location</td>
                                        <td>{job.address}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Minimum Education</td>
                                        <td> {job.minimumEducation}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px",color:"#808080"}}>Apply Before</td>
                                        <td>{job.applyBefore}</td>
                                    </tr>
                                    < tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px" ,color:"#808080"}}>Posting Date</td>
                                        <td>{job.postingDate}</td>
                                    </tr>
                            </tbody>
                        </Table>
                </div>
        
                    <Card.Text style={{marginLeft:"-450px" ,fontWeight:"bold", fontSize:"15px" }}> skills </Card.Text>  
                    <div style={{ width:"500px"  , marginLeft:"250px" , maxWidth:"600px"}} >
                           
                           {job.skills}
                    </div>
                 

                    <div>
                       <Button variant="primary" 
                       onClick={() => handleOnClick( history )}
                       style={{height:"50px" , width:"100px" , marginLeft:"500px" , marginTop:"30px"}}
                       >Apply</Button>
                    </div>
                    </Card.Body>
        </Card>   
                      
                </div>
                
    </div>)
}
export default withRouter(Viewjob)