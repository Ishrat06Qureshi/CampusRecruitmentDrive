import React , { Component } from "react";
import { Button  , Card , CardDeck, CardColumns} from 'react-bootstrap';
import { withRouter} from "react-router";
import axios from "axios";
import Loader from "../helperComponents/loader"

class Candidates extends Component {
  state = {
      Flag:true,
      data:[],
  }
handleOnclick = () => {
    const { history } = this.props
    history.push("/post")
}
 render(){

   const { Flag  , data} = this.state
     return(<div>
         {Flag?(<Loader/>):
         (<div>
          <Button variant="primary" onClick = {this.handleOnclick}>post</Button>
          <CardColumns>
           <ul>{data.map(( entry ) => <Card className="p-3" key={entry._id}
           style={{ maxWidth:"300px" , maxHeight:"5oopx"}}>
                <blockquote className="blockquote mb-0 card-body">
                        <h4> {entry.name}</h4>
                        <h5 style={{color:"#666666"}}> {entry.degree}</h5>
                        <p style={{color:"#0066ff"}}> {entry.tagline}</p>
               </blockquote>
           </Card>)}</ul>
         
         
  
</CardColumns>
</div>)
         }
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
export default Candidates