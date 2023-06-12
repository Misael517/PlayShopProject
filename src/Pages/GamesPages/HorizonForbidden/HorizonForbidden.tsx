import { memo, lazy, Suspense } from 'react';
import useGetImages from '../../../Hooks/useGetImages';
import styles from '../Styles/pagesStyle.module.css';
import jsonData from '../../../assets/gamesInfo.json';

const GameContent = lazy(() => import('../../../Components/GameContent/GameContent'))
const Navbar = lazy(() => import('../../../Components/Navbar/Navbar'))
const Footer = lazy(() => import('../../../Components/Footer/Footer'))

interface ShowCase {
    id: number;
    thumbnail: string;
    image: string;
}

function HorizonForbidden() {
    const currentGame = jsonData[3]
    const { data: img, isLoading: isImagesLoading, isError: isImagesError } = useGetImages('HorizonForbiddenImg', '/images/gamesImg/HorizonForbidden/', 'img', '.webp', 7);
    const { data: thumb, isLoading: isThumbLoading, isError: isThumbError } = useGetImages('HorizonForbiddenThumb', '/images/gamesImg/HorizonForbidden/imageThumbnail/', 'thumb', '.webp', 6);

    if (isImagesLoading || isThumbLoading) {
        return <h2>Loading...</h2>;
    }

    if (isImagesError || isThumbError) {
        return <h2>Error</h2>;
    }


    const imgArr: ShowCase[] = [
        {
            id: 0,
            thumbnail: thumb[0],
            image: img[0]
        },
        {
            id: 1,
            thumbnail: thumb[1],
            image: img[1]
        },
        {
            id: 2,
            thumbnail: thumb[2],
            image: img[2]

        },
        {
            id: 3,
            thumbnail: thumb[3],
            image: img[3]

        },
        {
            id: 4,
            thumbnail: thumb[4],
            image: img[4]
        },
        {
            id: 5,
            thumbnail: thumb[5],
            image: img[5]
        },
    ]

    return (
        <>
            {/* This is the navbar */}
            <header className={styles.header}>
                <Suspense>
                    <Navbar />
                </Suspense>
            </header>

            {/* This is the main part of the body */}
            <main className={styles.main}>
                <section className={styles.section1}>
                    <Suspense>
                        <GameContent imgArr={imgArr} img7={img[6]} currentGame={currentGame} />
                    </Suspense>
                </section>
            </main>

            {/* This is the footer, the end of the page */}
            <footer className={styles.footer}>
                <Suspense>
                    <Footer />
                </Suspense>
            </footer>
        </>)
}

const HorizonForbiddenMemo = memo(HorizonForbidden)

export default HorizonForbiddenMemo