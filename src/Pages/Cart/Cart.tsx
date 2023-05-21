import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

function Cart() {
    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>
                <section className={styles.itemsContainer}>

                </section>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>

        </>
    )
}

export default Cart