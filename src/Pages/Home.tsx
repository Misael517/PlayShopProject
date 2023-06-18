import { memo, lazy, Suspense } from 'react';
import styles from './Home.module.css';

const Navbar = lazy(() => import('../Components/Navbar/Navbar'))
const NewReleases = lazy(() => import('../Components/NewReleases/NewReleases'))
const MostPopular = lazy(() => import('../Components/GamesDisplay/MostPopular'))
const OnSale = lazy(() => import('../Components/GamesDisplay/OnSale'))
const CoomingSoon = lazy(() => import('../Components/GamesDisplay/ComingSoon'))
const BestOfTheYear = lazy(() => import('../Components/BestOfTheYear/BestOfTheYear'))
const Footer = lazy(() => import('../Components/Footer/Footer'))

function Home() {
    return (
        <>
            <header className={styles.header}>
                <Suspense >
                    <Navbar />
                </Suspense>
            </header>
            <main className={styles.main}>
                <section className={styles.ReleasesSec}>
                    <Suspense>
                        <NewReleases />
                    </Suspense>
                </section>
                <section className={styles.OnSaleSec}>
                    <Suspense>
                        <OnSale />
                    </Suspense>
                </section>
                <section className={styles.PopularSec}>
                    <Suspense>
                        <MostPopular />
                    </Suspense>
                </section>
                <section className={styles.CoomingSec}>
                    <Suspense>
                        <CoomingSoon />
                    </Suspense>
                </section>
                <section className={styles.BestSec}>
                    <Suspense>
                        <BestOfTheYear />
                    </Suspense>
                </section>
            </main>
            <footer className={styles.footer}>
                <Suspense>
                    <Footer />
                </Suspense>
            </footer>
        </>
    )
}

const HomeMemo = memo(Home)

export default HomeMemo
