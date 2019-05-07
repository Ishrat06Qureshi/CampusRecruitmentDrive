import React , { Component } from "react";
import Adminnavbar from "./AdminNav";
import { Button  , Card} from 'react-bootstrap';
import Viewcomponent from "./Viewcomponent";
import Loader from "../helperComponents/loader";
import axios from "axios"
class Companyaccess extends Component {
    state = {
        Flag:true,
        data:[],
    }

    render(){
        const {  Flag  , data} = this.state
    return(<div>
        <Adminnavbar activePage="/companyAccess" 
        UnactivePage="/studentAcces"
        UnactivePage2="/jobAccess" 
        history= {this.props.history} />
         {Flag ? <Loader/> :
          
              <ul style={{listStyle:"none"}} >
                  
            {data.map(( entry )=> {
                 
               return(<li><Viewcomponent entry={ entry } history = { this.props.history} pathname="/companydetailsremove"/></li>)            

            })} 


             </ul>
          }

        
        
        </div>)

    }


    
    componentDidMount() {
        axios.get("/companyRegistration").
        then((response) =>  {
            if (response.status === 200)
        this.setState(({
            data:response.data,
            Flag:false
        }))
     
       })
      
   
    }
}


export default Companyaccess