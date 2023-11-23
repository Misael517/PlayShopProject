import { memo, lazy, Suspense } from "react";
import styles from "./Home.module.css";

const Navbar = lazy(() => import("../Components/Navbar/Navbar"));
const NewReleases = lazy(() => import("../Components/NewReleases/NewReleases"));
const OnSale = lazy(() => import("../Components/GamesDisplay/OnSale"));
const BestOfTheYear = lazy(
  () => import("../Components/BestOfTheYear/BestOfTheYear")
);
const MostPopular = lazy(
  () => import("../Components/GamesDisplay/MostPopular")
);
const AdGames = lazy(() => import("../Components/AdGames/AdGames"));
const CoomingSoon = lazy(() => import("../Components/GamesDisplay/ComingSoon"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

function Home() {
  return (
    <>
      <header className={styles.header}>
        <Suspense>
          <Navbar />
        </Suspense>
      </header>
      <main className={styles.main}>
        <section className={styles.ReleasesSec}>
          <Suspense>
            <NewReleases />
          </Suspense>
        </section>
        <section className={styles.sellsSection}>
          <Suspense>
            <OnSale />
          </Suspense>
        </section>
        <section className={styles.sellsSection}>
          <Suspense>
            <BestOfTheYear />
          </Suspense>
        </section>
        <section className={styles.sellsSection}>
          <Suspense>
            <MostPopular />
          </Suspense>
        </section>
        <section className={styles.sellsSection}>
          <Suspense>
            <AdGames />
          </Suspense>
        </section>
        <section className={styles.sellsSection}>
          <Suspense>
            <CoomingSoon />
          </Suspense>
        </section>
      </main>
      <footer>
        <Suspense>
          <Footer />
        </Suspense>
      </footer>
    </>
  );
}

const HomeMemo = memo(Home);

export default HomeMemo;
