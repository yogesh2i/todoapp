import styled from "styled-components";
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route, HashRouter} from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import { useState } from "react";



function App() {
  const [LoggedIn,setLoggedIn] = useState(false)
  const logDetail=(val)=>{
    setLoggedIn(!val)
  }
 const checkFunc=(res)=>{
    setLoggedIn(res)
 }
  return (
    <HashRouter basename="/todoapp">
   <Container>
    <Routes>
     <Route path="/login" element={<Login checker={checkFunc} current={LoggedIn}/>}/>
      <Route path="/" element={<ProtectedRoute Component={Home} login={LoggedIn} logDetail={logDetail}/>}/>
    

    </Routes>
   </Container>
    </HashRouter>
  )
}

export default App;
const Container = styled.div`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
font-family: 'Poppins', sans-serif;


}
`;
