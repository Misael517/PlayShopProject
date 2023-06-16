// import styles from './Footer.module.css';
import { memo } from 'react';


function Footer() {
    return (
        <>
            <p style={{ textAlign: 'center', fontSize: '1rem' }}>Follow us</p>
        </>
    )
}

const FooterMemo = memo(Footer)

export default FooterMemo