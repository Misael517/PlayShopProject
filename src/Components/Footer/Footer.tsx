import styles from './Footer.module.css';
import { memo } from 'react';


function Footer() {
    return (
        <>
            <p className={styles.Footer}></p>
        </>
    )
}

const FooterMemo = memo(Footer)

export default FooterMemo