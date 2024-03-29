import { memo } from "react";
import styles from "./Discover.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import GameList from "../../Components/GamesList/GameList";
import Footer from "../../Components/Footer/Footer";

function Discover() {
  return (
    <>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main className={styles.main}>
        <section className={styles.section1}>
          <GameList />
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}

const DiscoverMemo = memo(Discover);

export default DiscoverMemo;
