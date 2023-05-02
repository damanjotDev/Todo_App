import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser, fetchUser } from '../../actions/AuthActions';
import AppForm from '../common/forms/AppForm';



export const Homepage=()=>{
    const userData = useSelector((state)=>state.User)
    const[users,setUsers]=React.useState(userData.allUsers)
    const navigate = useNavigate()
    const dispatch = useDispatch()
     console.log(userData)
    React.useEffect(()=>{
    setUsers(userData.allUsers)
    },[userData.allUsers])
   
    React.useEffect(()=>{
       dispatch(fetchUser())
    },[])
    return (<>
    <AppForm/>
   
    </>)
}