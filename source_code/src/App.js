import React,{useEffect,useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import { Profile } from './components/Profile';
import { Addition } from './components/Addition';
function App() {
  
  const [backendData,setBackendData]=useState([{}])
  useEffect (() => {
  fetch("/api").then(
    Response =>Response.json()
  ). then(
    data =>{
      setBackendDat(data)
    }
  )
},[])
  return (
    <BrowserRouter>
 <div className='\App'>
    <>
    
    
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          
          <Navbar.Brand href="#home">Naga Pavani Web site</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Profile" href="#Profile">Profile</Nav.Link>
            
            <Nav.Link as={Link} to="/Addition"  href="#Addition">Addition</Nav.Link>Cilent_side
          </Nav>
         
        </Container>
      </Navbar>
      <br />
  </>
  <div>
    <Routes>
      <Route path="/Profile" element={<Profile/>}/>
      <Route path="/Addition" element={<Addition/>}/>
    </Routes>
  </div>

   
  </div>
  </BrowserRouter>
  );
}

export default App;