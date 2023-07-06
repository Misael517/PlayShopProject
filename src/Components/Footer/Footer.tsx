import styles from './Footer.module.css';
import { memo } from 'react';


function Footer() {
    return (
        <>
            <p className={styles.FooterT}></p>
        </>
    )
}

const FooterMemo = memo(Footer)

export default FooterMemo