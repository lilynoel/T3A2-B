import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../context/UserContextProvider";

const LogOut = () => {
    const { setUserDetails } = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(() => {
        setUserDetails({ username: null, role: null });
        navigate('/');
    }, []);
    return null;
};

export default LogOut