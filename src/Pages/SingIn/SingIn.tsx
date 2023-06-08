import styles from './SingIn.module.css';
import Auth from '../../Components/Auth/Auth';

function SingIn() {
    return (
        <div className={styles.SingInBody}>
            <Auth />
        </div >
    );
}

export default SingIn;