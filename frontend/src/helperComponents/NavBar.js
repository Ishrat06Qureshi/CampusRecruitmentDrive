import React from "react";
import {  Button,Nav} from 'react-bootstrap';
import { NavLink } from "react-router-dom"

const handleBack = ( history ) =>{
    history.goBack()
}
const Navbar = (props) => {
    
   const {activePage , UnactivePage , state , history} = props
   console.log("active page ",activePage ,"UNactivePage", UnactivePage)
   console.log( state  )
    return(<div>
                <div style={{display:"flex"}}>
                  <div>
                       
                        <Button variant="warning"  onClick = { ( )=>handleBack( history)} 
                        style={{borderRadius:"255px", marginLeft:"250px", marginTop:"20px", width:"90px"}}>
                        <i class="material-icons"  >arrow_back</i></Button>
                   </div> 
                   <div>
                     <Nav variant="pills" defaultActiveKey={`${activePage}`}
                            style={{marginLeft:"100px", width:"450px", marginTop:"25px"}} >      
                                <Nav.Link as= {NavLink} to={{pathname:`${activePage}` , state:{state}}}  >
                                    {`${activePage.replace("/" , " ")}`} 
                                    </Nav.Link>
                        <Nav.Item>
                                <Nav.Link as= {NavLink} to={{pathname:`${UnactivePage}` ,
                                state:{state}}}>{`${UnactivePage.replace("/" , " ")}`} </Nav.Link>
                        </Nav.Item>
                            <Button  variant="warning" style={{width:"70px", 
                                    height:"50px" , 
                                    marginLeft:"400px" , 
                                    marginTop:"-45px",
                                    width:"100px"}} 
                                    > Logout 
                            </Button>
                      </Nav>
                   </div>
             </div>
   </div>  )

}

export default Navbar