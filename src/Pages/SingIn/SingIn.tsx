import styles from './SingIn.module.css';
import Auth from '../../Components/Auth/Auth';

interface Inputs {
    email: string;
    password: string;
}

function SingIn() {
    return (
        <div className={styles.SingInBody}>
            <Auth />
        </div >
    );
}

export default SingIn;