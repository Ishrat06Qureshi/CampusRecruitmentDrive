import React from "react"
import { Button  , Card , Table} from 'react-bootstrap';
import Deletecomponent from "./DeleteComponent"
import Adminnavbar from "./AdminNav";
import axios from "axios"

const handleOnClick = ( history,id ) => {
    axios.delete(`/companyRegistration/${id}`).then(( res) => {
        console.log(res)
        if(res.status === 200){
           history.push("/companyAccess")
        }

    })
}
const Companydetailsremove = ( props ) => {
    const { history } = props
    const { entry } =  props.location.state
    
     
    return(<div>
         <Adminnavbar activePage="/studentAcces" 
        UnactivePage="/companyAccess"
        UnactivePage2="/jobAccess" 
        history= {props.history} /> 
          <Card style={{width:"800px", marginLeft:"200px", height:"450px", marginTop:"20px", 
           }}>
              
            <Deletecomponent  entry = { entry }  />
            <Button  variant = "primary" onClick = {()=>handleOnClick(history,entry._id)} style={{width:"150px" ,
             height:"40px" , marginLeft:"500px"}}>Remove</Button>
            </Card>
            
    </div>)


}
export default Companydetailsremove 