import { createContext, useState } from  'react';

export const UserContext = createContext({});

export function UserContextProvider(props) {
    const { children } = props;
    const [userDetails, setUserDetails] = useState({username: null, role: null})
    return <UserContext.Provider>{children}</UserContext.Provider>
}