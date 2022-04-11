import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function GetData() {
    const [bj, setBj] = useState([])


    useEffect(() => {

        axios({
            method: "GET",
            url: "https://624bf01c71e21eebbcf7daaf.mockapi.io/crud",

        }).then((response) => {
            console.log("response",response)
            setBj(response.data)
        })

    },[])


    return (
        <div>

<table border = "1">
   
        <td>firstname</td>
        <td>lastname</td>
        <td>password</td>
        <td>email</td>
        <td>date</td>
        <td>id</td>
        <td>gender</td>
        <td>about</td>
        <td>social</td>
        <td>income</td>
{
    bj.map((item)=>
    
    <tr>
    <td>{item.firstname}</td>
    <td>{item.lastname}</td>
    <td>{item.email}</td>
    <td>{item.date}</td>
    <td>{item.password}</td>
    <td>{item.id}</td>
    <td>{item.gender}</td>
    <td>{item.about}</td>
    <td>{item.social}</td>
    <td>{item.income}</td>
    

</tr>
    
    )
}


    </table>
        </div>
    
    )
}
export default GetData;