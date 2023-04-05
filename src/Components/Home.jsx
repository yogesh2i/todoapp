import React from 'react';
import Clock from "./HomeUtils/Clock"
import List from "./HomeUtils/List"
import Profile from "./HomeUtils/Profile"

export default function Home() {
 
 
  return (
    <>
    <div style={{backgroundColor:"white",minHeight:"100vh",maxHeight:"100%",paddingBottom:"1rem"}}>
    <Profile />
   <Clock/>
   <List/>
    </div>
    </>
  )
}
