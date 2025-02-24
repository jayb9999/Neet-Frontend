//import React, { useEffect } from 'react'
import { useNavigate, Outlet, Navigate } from 'react-router-dom'
//import axios from 'axios'
import Cookies from 'js-cookie'

const ProtectedLayout = () => {
    //const navigate = useNavigate()
    const jwtToken = Cookies.get("jwtToken")
    if (jwtToken === undefined) {
        return <Navigate to="/login" replace />;
    }
    
    return <Outlet />;
}

export default ProtectedLayout