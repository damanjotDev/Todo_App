import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LogoutUser, fetchUser } from '../store/slices/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { useGetUsersQuery } from '../store/slices/AuthApi';



export const Homepage=()=>{
    const userData = useSelector((state)=>state.User)
    const[users,setUsers]=React.useState(userData.allUsers)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const{data}= useGetUsersQuery()
    console.log(users)

    React.useEffect(()=>{
    setUsers(userData.allUsers)
    },[userData.allUsers])
   
    return (<>
    <div style={{display:"flex",justifyContent:"space-between",width:'90%',margin:"auto"}}>
    <h1>Welcome to Homepage!</h1>
    <h1 onClick={()=>dispatch(LogoutUser(navigate))}>Logout</h1>
    </div>
    <div style={{width:'90%',margin:"auto"}}>
    {users.data?.length?users.data.map(({id,name,color})=><h1 key={id} style={{color:color}}>{name}</h1>):"No Result Found!"}
    </div>
   
    </>)
}