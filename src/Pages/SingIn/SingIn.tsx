import { memo } from 'react';
import styles from './SingIn.module.css';
import Auth from '../../Components/Auth/Auth';

function SingIn() {
    return (
        <div className={styles.SingInBody}>
            <Auth />
        </div >
    );
}

const SingInMemo = memo(SingIn)

export default SingInMemo