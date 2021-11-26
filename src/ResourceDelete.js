import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";


function ResourceDelete(){
    const [staff,setStaff] = useState([])
    const {id} = useParams()


    useEffect(()=>{
        console.log("use effect hook executed");
        
        axios
        .delete(`http://localhost:3001/resource/${id}`)
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            setStaff(response.data)
            window.location='/ResourceList';
        })
        
    },[])

    return(<>
    </>
    );
}
export default ResourceDelete;