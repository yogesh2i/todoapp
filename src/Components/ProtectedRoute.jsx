import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function ProtectedRoute(props) {
    const {Component,login,logDetail} = props;
    let navigate = useNavigate();
    useEffect(()=>{
        if(!login){
            navigate('/login')
        }
       
    },[props])
  return (
    <div>
     <Component logDetail={logDetail} login={login}/>
    </div>
  )
}
