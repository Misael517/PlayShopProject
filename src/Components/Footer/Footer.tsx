import styles from "./Footer.module.css";
import { memo } from "react";

const currentDate = new Date();

function Footer() {
  return (
    <>
      <p className={styles.Footer}>© {currentDate.getFullYear()} PlayShop</p>
    </>
  );
}

const FooterMemo = memo(Footer);

export default FooterMemo;
