import { createContext, useState } from  'react';

export const UserContext = createContext({});

export function UserContextProvider(props) {
    const { children } = props;
    const [userDetails, setUserDetails] = useState({
        username: null,
        role: null,
    });
    const data = { userDetails, setUserDetails };
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
}