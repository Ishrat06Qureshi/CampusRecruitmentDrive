import React , {Component } from "react";
import { Button  , Card } from 'react-bootstrap';
import { withRouter} from "react-router";
import Navbar from "../helperComponents/NavBar";
import axios from "axios";
import Loader from "../helperComponents/loader"

class Dashboard extends Component {

    state= {
        jobs:[],
        companies:[],
        loadingFlag : true
    }
    handleChange = ( job ) => {
        
        
        const { history } = this.props
        
        history.push({
            pathname:'/ViewJob',
            state:{job,}
        })
    }

   
    
    render() {
 
        const { jobs ,companies  , loadingFlag} = this.state
        console.log(jobs)
        return(<div>
            
             <Navbar activePage="/Dashboard" UnactivePage="/comapnyprofile" state={ companies } history={this.props.history} />
                
                <div style={{  marginTop: "20px",marginLeft:"220px" , marginTop:"60px"}}>
                     {loadingFlag ? 
                    <div style={{marginLeft:"-350px" , marginTop:"200px"}}>
                    <Loader/>
                    </div>
                    :<ul>
                        { jobs.map(( entry ) =>  <Card  style={{width:"750px" , marginBottom:"50px"  }}>
                     <Card.Body>
                        <Card.Title style={{textTransform:"capitalize" , marginLeft:"-530px"}}>{entry.post}</Card.Title>
                        <div style={{display:"flex"}}>
                          <Card.Text variant="primary" style={{textTransform:"capitalize" , color:"#0066ff" }} >{entry.name }     , </Card.Text>
                          <Card.Text variant="primary"style={{textTransform:"capitalize", color:"#0066ff"}}>{ entry.city }    , </Card.Text>
                          <Card.Text variant="primary"style={{textTransform:"capitalize" , color:"#0066ff"}}>{entry.country}  , </Card.Text>


                       </div>
                       
                       <Card.Text style={{textTransform:"capitalize"}}>{entry.jobOverview}</Card.Text>
                    </Card.Body>
                    <Card.Footer style = {{backgroundColor:"white"}}>
                    <div style={{display:"flex"}}>
                    <Card.Text style={{color:"#0066ff"}}>apply before : {entry.applyBefore}</Card.Text>
                    <Button  variant="outline-warning" style={{width:"70px", 
                    height:"50px" , 
                    marginLeft:"400px" , 
                    marginBottom:"20px",}} 
                    onClick = { ()=>this.handleChange( entry )}>View</Button>
                    
                    </div>
                    </Card.Footer>
                    </Card>)}
                    </ul>
                    }
                        
                 
                    </div> 
                
          
        </div>)
    }


    componentDidMount () {
         const { jobs , companies} = this.state
         
         
        Promise.all([axios.get("/companyRegistration") , axios.get("/jobs") ]).
        then(( [ companies , jobs ] ) => {
                if ( companies && jobs) {
                    this.setState(({
                        jobs:jobs.data,
                        companies:companies.data,
                        loadingFlag:false
                    }))
                }
        })
    




          
    }
}
export default withRouter(Dashboard)