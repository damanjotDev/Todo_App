import React from 'react';
import Cookies from 'js-cookie'
import { Route,Navigate, Routes, useNavigate,} from "react-router-dom";
import { Login } from '../Auth/Login';
import { Signup } from '../Auth/Signup';
import { Homepage } from '../Dashboard/HomePage';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';


const AllRoutes = () => {
  const navigate = useNavigate()
  return (
    <Routes>
      <Route exact path="/" element={<PrivateRoute><Homepage/></PrivateRoute>} />
      <Route path="/login" element={Cookies.get('token')?<Navigate to="/"/>:<Login/>} />
      <Route path="/register" element={Cookies.get('token')?<Navigate to="/"/>:<Signup/>} />
      {/* <Route render={() => <Navigate to="/login" />} /> */}
    </Routes>
  );
};

export default AllRoutes;