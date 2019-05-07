import React from "react"
import { Button  , Card , Table} from 'react-bootstrap';
import Deletecomponent from "./DeleteComponent"
import Adminnavbar from "./AdminNav";
import axios from "axios"

const handleOnClick = ( history , id) => {
    console.log( history , id)
    axios.delete(`/candidateRegistration/${id}`).then(( res) => {
        console.log(res)
        if(res.status === 200){
           history.push("/studentAcces")
        }

    })
}
const Studentdetailsremove = ( props ) => {
    const { entry } =  props.location.state
    const { history } = props
    
    
    return(<div>
         <Adminnavbar activePage="/studentAcces" 
        UnactivePage="/companyAccess"
        UnactivePage2="/jobAccess" 
        history= {props.history} />
          <Card style={{width:"800px", marginLeft:"200px", height:"350px", marginTop:"20px", 
           }}>
              
            <Deletecomponent  entry = { entry }  />
            <Button  variant = "primary" onClick = {() => handleOnClick(history , entry._id)} style={{width:"150px" ,
             height:"40px" , marginLeft:"500px"}}>Remove</Button>
            </Card>
            
    </div>)


}
export default Studentdetailsremove 