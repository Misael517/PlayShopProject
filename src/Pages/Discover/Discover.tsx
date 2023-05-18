import styles from './Discover.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Footer from '../../Components/Footer/Footer';

function Discover() {
    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>
                <section className={styles.section1}>
                    <SearchBar />
                </section>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    )
}

export default Discover