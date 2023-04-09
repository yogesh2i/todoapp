import styled from "styled-components";
import Home from "./Components/Home";
import {Routes,Route, HashRouter} from "react-router-dom"
import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";
import { createContext, useState } from "react";
import Welcome from "./Components/Welcome";


export const login = createContext(null);

function App() {
  const [LoggedIn,setLoggedIn] = useState(false);
  const [oldUser, setUser] = useState(false);
 
 
  return (
    <HashRouter basename="/">
   <Container>
      <login.Provider value={{LoggedIn,setLoggedIn,setUser,oldUser}}>
    <Routes>
     <Route exact path="/login" element={<Login />}/>
       <Route exact path="/welcome" element={<Welcome/>} />
      <Route exact path="/" element={<ProtectedRoute Component={Home} />}>
     </Route>
     
    </Routes>
      </login.Provider>
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
