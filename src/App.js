import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"



import Login from './Login'
import CourseList from "./CourseList";
import CourseEdit from "./CourseEdit";
import CourseDetails from "./CourseDetails";
import AddResource from "./AddResource"
import NoMatch from "./NoMatch"
import ResourceList from "./ResourceList"
import './Main.css'
import ResourceDetails from "./ResourceDetails"
import ResourceDelete from "./ResourceDelete"
import ResourceEdit from "./ResourceEdit"

function App(){
  return(<div id="ui">
    <h1>Library</h1>
    <MyRouter/>
    <br/><br/><br/><br/>
    <p>Copyright 2021 - All rights Reserved</p>
  </div>

  )
}

function MyRouter(){
  var div={
    display:"inline",
    padding:'10px',
    marginleft:'30px'
  }
  return(
    <Router>
      <div id="nav">

        <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }} to="/login">Login</Link></div>
        <div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/courselist">Course List</Link></div>
        


      
      
      <div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/login">Login</Link></div>
      <div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/addresource">Add Resource</Link></div>
      <div id ="link" style={div}><Link style={{textDecoration:"none",color:'black'}} to="/resourcelist">Resource List</Link></div>

      </div>
      <Routes>
       
        
        
        <Route path="/addresource" element={<AddResource/>}/>
        <Route path="*" element={<NoMatch/>}/>
        <Route path="resourcedetails/:id" element={<ResourceDetails/>}/>
        <Route path="resourcedelete/:id" element={<ResourceDelete/>}/>
        <Route path="/resourceedit/:id" element={<ResourceEdit/>}/>
        <Route path="/resourcelist" element={<ResourceList/>}/>
        <Route path="/login" element={<Login />} />

        <Route path="/courselist" element={<CourseList/>}/>
        <Route path="/coursedetails/:id" element={<CourseDetails/>}/>
        <Route path="/courseedit/:id" element={<CourseEdit/>}/>


      </Routes>
      
    </Router>
  );
}

export default App;