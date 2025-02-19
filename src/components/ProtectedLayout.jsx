import React, { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
//import axios from 'axios'
import Cookies from 'js-cookie'

const ProtectedLayout = () => {
    const navigate = useNavigate()
    const jwtToken = Cookies.get("jwtToken")
    useEffect(() => {
        // Check if the JWT token is not found, then navigate to login
        if (jwtToken === undefined) {
          navigate('/login');
        }
    }, [jwtToken, navigate]); // Only rerun the effect if jwtToken or navigate changes
    
    return <Outlet />;

    /*const [isAuthenticated, setIsAuthenticated] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get("http://localhost:3000/user", { withCredentials: true });
                setIsAuthenticated(true);
            } catch {
                setIsAuthenticated(false);
                navigate("/login")
            }
        }
    }, [navigate]);

    if (isAuthenticated === null) return <h2>Loading...</h2>;

    return isAuthenticated ? <Outlet /> : null;*/
}

export default ProtectedLayout