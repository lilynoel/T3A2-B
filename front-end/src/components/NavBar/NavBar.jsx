import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import styles from './NavBar.module.scss';
import { UserContext } from '../../context/UserContextProvider';

export default function NavBar() {
    const { userDetails } = useContext(UserContext);
    const { username, role } = userDetails;
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.nav_link} to="/">
                Home</NavLink>
            <NavLink className={styles.nav_link} to="/products">
             Products</NavLink>
            {username ? <NavLink className={styles.login}>
                Logout</NavLink> : <NavLink to='/login' className={styles.login}>
                Login</NavLink>}
        </nav>
    );
}