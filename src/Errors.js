import { ErrorMessage } from "formik";
import React from "react";


function Errors({name}){
return(
    <div style={{color:"red"}}>
<ErrorMessage name = {name}/>


    </div>
)
}
export default Errors;