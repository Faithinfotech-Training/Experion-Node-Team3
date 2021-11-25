import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import Login from './Login'

import './Main.css'

/*import  Main  from './Main'
import  Header from './Header'
import  Footer from './Footer'
function App(){
  return(<>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}*/
function App() {
  return (<div id="ui">
    <h1>Brand Name</h1>
    <MyRouter />
    <br /><br /><br /><br />
    <p>Copyright 2021 - All rights Reserved</p>
  </div>

  )
}

function MyRouter() {
  var div = {
    display: "inline",
    padding: '10px',
    marginleft: '30px'
  }
  return (
    <Router>
      <div id="nav">
        <div id="link" style={div}><Link  style={{ textDecoration: "none", color: 'black' }} to="/login">Login</Link></div>
        
      </div>
      <Routes>
        
        
        <Route path="/login" element={<Login />} />
        
      </Routes>

    </Router>
  );
}
/*function App(props){
  const newCountry = "Japan"
  return(<>
      <p>Hello</p>
      <Hi name = "vsvj" country = "India"/>
      <Hi/>
      <Hi name = "Xuli"/>
      <Hi name = "Keyoko" country={newCountry}/>
    </>
  );
}*/
/*function Hi(props){
  return(<>
      <p>Hello {props.name} from {props.country}</p>
    </>
  );
}*/
export default App;