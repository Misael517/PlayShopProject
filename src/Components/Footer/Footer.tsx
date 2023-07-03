// import styles from './Footer.module.css';
import { memo } from 'react';


function Footer() {
    return (
        <>
            <p style={{ textAlign: 'center', fontSize: 'calc(0.5vw + .2rem)' }}>Follow us</p>
        </>
    )
}

const FooterMemo = memo(Footer)

export default FooterMemo