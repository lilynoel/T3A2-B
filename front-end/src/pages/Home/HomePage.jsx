import { useContext } from 'react';
import { UserContext } from '../../context/UserContextProvider';

function HomePage() {
    const { userDetails } = useContext(UserContext);
    const { username } = userDetails
    return (<h1> Welcome {username || 'guest!'} </h1>);
}

export default HomePage;
