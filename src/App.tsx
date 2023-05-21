import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import NewReleases from './Components/NewReleases/NewReleases';
import OnSale from './Components/GamesDisplay/OnSale';
import MostPopular from './Components/GamesDisplay/MostPopular';
import CoomingSoon from './Components/GamesDisplay/CoomingSoon';
import BestOfTheYear from './Components/BestOfTheYear/BestOfTheYear';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <section className={styles.ReleasesSec}>
          <NewReleases />
        </section>
        <section className={styles.OnSaleSec}>
          <OnSale />
        </section>
        <section className={styles.PopularSec}>
          <MostPopular />
        </section>
        <section className={styles.CoomingSec}>
          <CoomingSoon />
        </section>
        <section className={styles.BestSec}>
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
