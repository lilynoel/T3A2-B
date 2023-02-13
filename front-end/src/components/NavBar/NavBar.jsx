import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar() {
    return (
        <nav className={styles.nav}>
            <NavLink className={styles.nav_link} to="/">Home</NavLink>
            <NavLink className={styles.nav_link}  to="/products">Products</NavLink>
        </nav>
    );
}