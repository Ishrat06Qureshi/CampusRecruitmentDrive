import React from "react"
import {  Card , Table} from 'react-bootstrap';

const Deletecomponent =  ( props ) => {
   
    const notShowableData = {
        _id:"_id",
        password:"password",
        __v:"__v",
    }
    const { entry } =  props 
    return(<div>
         
                 <div>
                 <Table borderless style={{marginLeft:"100px" , width:"500px" ,
                  marginTop:"20px" ,}}>
                            <tbody>
                                    {Object.keys(entry).map(( data ) => {
                                        if ( data in notShowableData)
                                        {
                                            return null
                                        }
                                        else{
                                            return(<div>       
                                                <tr>
                                                  <td style={{fontWeight:"bold", fontSize:"15px" , color:"#808080"}}>{ data }</td>
                                                  <td>{entry[data]}</td> 
                                              </tr>
                                              </div>)
                                        }
                                      
                                      
                                    })}
                            </tbody>
                        </Table>
                 </div>
    </div>)

}
export default Deletecomponent