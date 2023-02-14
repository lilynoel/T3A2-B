import logo from '../../assets/logo.png';
import styles from './MainLogo.module.scss';


const MainLogo = () => {
  return (
      <div className={styles.container} >
          <img src={logo} alt='logo' width='500'/>
    </div>
  )
}

export default MainLogo