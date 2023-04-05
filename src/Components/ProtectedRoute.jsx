import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../App';

export default function ProtectedRoute(props) {
    const {Component} = props;
    let {LoggedIn} = useContext(login);
    let navigate = useNavigate();
    useEffect(()=>{
        if(!LoggedIn){
            navigate('/login')
        }
    },[LoggedIn])
  return (
    <div>
     <Component/>
    </div>
  )
}
