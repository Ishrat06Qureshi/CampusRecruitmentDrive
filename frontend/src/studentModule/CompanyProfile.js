import React , {Component } from "react";
import Navbar from "../helperComponents/NavBar"
import {  Card  , Table} from 'react-bootstrap';

class Companyprofile extends Component {
    
    state = {
         data: this.props.history.location.state.state,
       
         entry : this.props.history.location.state.state[0]
    }
 

    handleOnClick = ( e  ) => {
    
        console.log(e)
      
        
        
        
    }
    render(){
       const { data , entry} = this.state
      
       const test= ["axiom" , "state bank" , "pakistan" , "karachi"]
       
return(<div>
    <div>
            <Navbar activePage="/comapnyprofile" 
            UnactivePage="/Dashboard" 
            history={this.props.history} />
   <div  style = {{display:"flex" , marginLeft:"90px" , marginTop:"50px" }}>
       
            <div >
                <Card style = {{ width:"300px" , height:"500px" , maxHeight:"1500px" ,border:"2px solid #ecf2f9"}}>
                    <Card.Body>
                        {/* <ul>
                            {data.map(( entry ) => {
                             console.log(entry)
                                return( <li key={entry._id}
                                  onClick = {this.handleOnClick}>{entry.name}</li>)} , this)}
                        </ul> */}
                       <ul>
                          
                {test.map(( entry) => <li onClick = {() => console.log("hello world")}>{ entry }</li>)}
                               
                       </ul>
                       
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card  style = {{ width:"800px" ,
                maxWidth:"1500px" ,
                height:"650px" , 
                maxHeight:"1500px" , 
                marginLeft:"50px",
                border:"2px solid #ecf2f9"}}>
                 <Card.Body>
                     
                        <Card.Text style={{fontWeight:"bold" , fontSize:"25px" , marginLeft:"-650px" }} >{entry.name}</Card.Text>
                        <Card.Text style={{textTransform:"capitalize" , color:"#0066ff" , marginLeft:"-450px" }} >{entry.address}</Card.Text>
                        <Card.Text style={{textTransform:"capitalize"  , marginLeft:"-600px", fontWeight:"bold" , fontSize:"20px" , color:"#808080"  }}> Who we Are ?  </Card.Text>
                        <div>
                        <Table borderless style={{marginLeft:"50px" , width:"600px" , marginLeft:"-10px"}}>
                            <tbody>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px" , width:"200px" }}> About us </td>
                                        <td  style={{ width:"500px" ,
                                         maxWidth:"1000px" , 
                                         height:"50px" ,
                                          maxHeight:"500px"}} >
                                          {entry.companyIntro}
                                         </td> 
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px"}}>Industry</td>
                                        <td>{entry.Industry}</td>
                                       
                                       
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px"}}>Number of Employees</td>
                                        <td>{entry.totalNumberOfEmployees}</td>
                                    </tr>
                                    <tr>
                                        <td style={{fontWeight:"bold", fontSize:"15px"}}>Email</td>
                                        <td>{entry.email}</td>
                                    </tr>
                                   
                                   
                            </tbody>
                        </Table>
                        </div>
                       
                       
                    </Card.Body> 
                
                </Card>
            </div>
    </div>


    </div>
  
  
</div>)
}
}
export default Companyprofile