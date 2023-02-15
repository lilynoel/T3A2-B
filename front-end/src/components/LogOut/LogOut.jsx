import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContextProvider';
import { logoutUser } from '../../services/user-services';

const LogOut = () => {
  const { setUserDetails } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser().then(() => {
      setUserDetails({ username: null, role: null, jwt: null });
      navigate('/');
    });
  }, []);

  return null;
};

export default LogOut;