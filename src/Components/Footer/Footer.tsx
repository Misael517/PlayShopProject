// import styles from './Footer.module.css';
import { memo } from 'react';


function Footer() {
    return (
        <>
            <p style={{ textAlign: 'center', }}>Follow us</p>
        </>
    )
}

const FooterMemo = memo(Footer)

export default FooterMemo