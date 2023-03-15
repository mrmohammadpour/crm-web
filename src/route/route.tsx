import React from 'react';
import { Box } from '@mui/system';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
// import Leftbar from './components/leftbar/leftbar';
// import Rightbar from './components/rightbar/Rightbar';
// import Fourty from './page/404/404';

import { Navigate, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Layout from '../layout/layout';
import Dashbord from '../page/center/dashbord/dashbord';
import Login from '../page/center/login/login';
import User from '../api/auth/user/user';
import Create_company from '../page/center/company/create company/create_company';
import List_company from '../page/center/company/list company/list_company';
import List_user from '../api/auth/list_user/list_user';
const Wl_route = () => {
  const navigate = useNavigate();

  return (
    
    
    <Layout>
      <Routes>


        <Route path="dashboard" element={<Dashbord />} />
        <Route path="company" element={<Create_company />} />
        <Route path="user" element={<User />} />
        <Route path="list_company" element={<List_company />} />
        <Route path="listuser" element={<List_user />} />

        <Route path="404" element={<Dashbord />} />

        
      </Routes>
    </Layout>

  );
}

export default Wl_route;