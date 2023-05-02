import * as React from 'react';
import { Login } from '../Auth/Login';
import Cookies from 'js-cookie';

export const PrivateRoute=({children})=>{
  const[status,setStatus]=React.useState(Cookies.get('token')?true:false);
  
  if(status){
    return children
  }
  return <Login/>
}