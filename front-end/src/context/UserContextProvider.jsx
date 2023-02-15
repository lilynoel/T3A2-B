import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider(props) {
  const { children } = props;
  const [userDetails, setUserDetails] = useState({
    username: null,
    role: null,
    jwt: null,
  });
  useEffect(() => {
    const jwt = sessionStorage.getItem('jwt');
    if (jwt) {
      fetch('http://localhost:3000/auth/my_details', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
        .then((response) => response.json())
        .then((userData) =>
          setUserDetails({
            username: userData.username,
            role: userData.role,
            jwt: jwt,
          })
        )
        .catch((error) => console.log(error));
    }
  }, []);
  const data = { userDetails, setUserDetails };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}