import React from 'react';
import { Route,Navigate, Routes,} from "react-router-dom";
import { Login } from './Login';
import { Signup } from './Signup';

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Signup/>} />
      {/* <Route render={() => <Navigate to="/login" />} /> */}
    </Routes>
  );
};

export default AllRoutes;