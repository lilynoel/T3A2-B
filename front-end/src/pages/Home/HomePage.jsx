import { useContext } from 'react';
import { UserContext } from '../../context/UserContextProvider';

function HomePage() {
    const { userDetails } = useContext(UserContext);
    const { username, jwt} = userDetails
    return (<h1> Welcome {username || 'guest!'} </h1>);
    // return (<h1> Welcome {username || 'guest!'}{jwt} </h1>);
}

export default HomePage;
