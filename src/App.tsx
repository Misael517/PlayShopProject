import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import NewReleases from './Components/NewReleases/NewReleases';
import OnSale from './Components/OnSale/OnSale';
import MostPopular from './Components/MostPopular/MostPopular';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import GamesGenre from './Components/GamesGenre/GamesGenre';
import BestOfTheYear from './Components/BestOfTheYear/BestOfTheYear';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <NewReleases />
        </section>
        {/* <section className={styles.section2}>
          <GamesGenre />
        </section> */}
        <section className={styles.section3}>
          <OnSale />
        </section>
        <section className={styles.section4}>
          <MostPopular />
        </section>
        <section className={styles.section5}>
          <ComingSoon />
        </section>
        <section className={styles.section6}>
          <BestOfTheYear />
        </section>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}

export default App
