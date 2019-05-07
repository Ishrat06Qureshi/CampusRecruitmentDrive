import React , {Component} from "react";
import { Button  , Card} from 'react-bootstrap';
import Viewcomponent from "./Viewcomponent";
import Loader from "../helperComponents/loader";
import axios from "axios";
import Adminnavbar from "./AdminNav";
class  Studentview  extends Component {
    state = {
        Flag:true,
        data:[],
    }

    
    
    render(){
    const {  Flag  , data} = this.state
    
    console.log(data)
    return(<div>
      <Adminnavbar activePage="/studentAcces" 
        UnactivePage="/companyAccess"
        UnactivePage2="/jobAccess" 
        history= {this.props.history} />
        
        

    {Flag ? <Loader/> :
          
          
              
              <ul style={{listStyle:"none"}} >
                  
            {data.map(( entry )=> {
                 
               return(<li><Viewcomponent entry={ entry } history = { this.props.history} pathname="/studentdetailsremove"/></li>)            

            })} 
             </ul>   }
    </div>)

    }

    componentDidMount() {
        axios.get("/candidateRegistration").
        then((response) =>  {
            if (response.status === 200)
        this.setState(({
            data:response.data,
            Flag:false
        }))
     
       })
      
   
    }
}
export default Studentview