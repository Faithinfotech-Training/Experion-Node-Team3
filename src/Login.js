import { useState } from "react";
import './Main.css'
import axios from 'axios'

function Login() {
    
    return (<div>
        <h1>Please Login</h1>
        <MyForm />


    </div>);
}
function MyForm(props) {
    
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        
        const name = event.target.name;
        const value = event.target.value;
       
        setInputs(values => ({ ...values, [name]: value }))
    }


    function handleSubmit(event) {
        
        event.preventDefault();

        console.log(inputs);

        axios
            .post(`http://localhost:4500/crm/login/`, inputs)
            .then(response => {
                
                console.log(response);
               
            })
            .catch(error => {
                localStorage.clear();
                
                if (error.response) {
                    alert(error.response.data); 
                }
            })


    }
    return (<div id="main">

        <form onSubmit={handleSubmit}>
            <div>
                <label>Userid:</label>
                <input style={{ marginLeft: 83 }} type="text" name="userName" value={inputs.userName || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Password:</label>
                <input style={{ marginLeft: 60 }} type="password" name="password" value={inputs.password || ""} onChange={handleChange} required />
            </div>
            <button type="submit" >Login</button>
        </form>
    </div>);
}

export default Login;