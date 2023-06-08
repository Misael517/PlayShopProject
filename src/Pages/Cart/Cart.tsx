import { memo } from 'react';
import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import CartList from '../../Components/CartList/CartList';

function Cart() {
    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>


                {/* Cart section */}
                <section className={styles.cartSection}>
                    <CartList />
                </section>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    )
}

const CartMemo = memo(Cart)

export default CartMemo