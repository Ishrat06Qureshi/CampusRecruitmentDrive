import React , { Component } from "react";
import Adminnavbar from "./AdminNav";
import Viewcomponent from "./Viewcomponent";
import Loader from "../helperComponents/loader";
import { Button  , Card} from 'react-bootstrap';
import axios from "axios"

class Jobaccess  extends Component {
    state = {
        Flag:true,
        data:[],
    }
    render(){
        const {  Flag  , data} = this.state
    return(<div>
        
        
        <Adminnavbar activePage="/jobAccess" 
        UnactivePage="/companyAccess"
        UnactivePage2="/studentAcces" 
        history= {this.props.history} />
        {Flag ? <Loader/> :
          
              <ul style={{listStyle:"none"}} >
                  
            {data.map(( entry )=> {
                 
               return(<li><Viewcomponent entry={ entry } history = { this.props.history} pathname="/jobdetailsremove"/></li>)            

            })} 

             </ul>
            }


        </div>)
}
componentDidMount() {
    axios.get("/jobs").
    then((response) =>  {
        if (response.status === 200)
    this.setState(({
        data:response.data,
        Flag:false
    }))
 
   })
  

}
}
export default Jobaccess