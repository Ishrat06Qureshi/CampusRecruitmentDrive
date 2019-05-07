import React  from "react";
import { Button  , Card ,} from 'react-bootstrap';


 const handleOnClick = ( history , entry , pathname) =>{
     

     history.push({
         pathname:pathname,
         state:{  entry }
     })
 }

const Viewcomponent = ( props ) => {
    const { history  , entry , pathname} = props
    console.log(entry)
    const notShowableData = {
        _id:"_id",
        password:"password",
        __v:"__v",
        address:"address",
        email:"email",
        applyBefore:"applyBefore",
        department:"department",
        jobShift:"jobShift",
        minimumEducation:"minimumEducation",
        post:"post",
        postingDate:"postingDate",
        skills:"skills",
        totalPosition:"totalPosition"


    }
   
    
    return( <div>


<Card className="p-3"  style={{ maxWidth:"590px" ,
maxHeight:"5oopx" , 
height:"300px" ,
 width:"700px",
  marginTop:"50px",
   marginLeft:"350px"}}>
 <ul >{Object.keys(entry).map (( data ) => {
   if ( data in notShowableData)
   {
       return null
   }
   else{ return(
    <blockquote className="blockquote mb-0 card-body" key={data._id}>
    <h6 style={{color:"#666666" , marginTop:"-30px"}}> {entry[data]}</h6>      
   </blockquote> )
       
   }
 })
 }
  </ul>

 <Button variant ="primary"  style={{ width:"150px" , height:"40px", marginLeft:"210px"}}
 onClick = { () => handleOnClick(history , entry , pathname)} > View Details</Button>

</Card>
</div> )


}

export default Viewcomponent