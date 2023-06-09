import { memo } from 'react';
import useGetImages from '../../../Hooks/useGettImages';
import styles from '../Styles/pagesStyle.module.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import jsonData from '../../../assets/gamesInfo.json';
import GameContent from '../../../Components/GameContent/GameContent';
interface ShowCase {
    id: number;
    thumbnail: string;
    image: string;
}

function HorizonForbidden() {
    const currentGame = jsonData[3]
    const { data: img, isLoading: isImagesLoading, isError: isImagesError } = useGetImages('HorizonForbiddenImg', '/images/gamesImg/HorizonForbidden');
    const { data: thumb, isLoading: isThumbLoading, isError: isThumbError } = useGetImages('HorizonForbiddenThumb', '/images/gamesImg/HorizonForbidden/imageThumbnail');

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
                <Navbar />
            </header>

            {/* This is the main part of the body */}
            <main className={styles.main}>
                <section className={styles.section1}>
                    <GameContent imgArr={imgArr} img7={`${img[6]}`} currentGame={currentGame} />
                </section>
            </main>

            {/* This is the footer, the end of the page */}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>)
}

const HorizonForbiddenMemo = memo(HorizonForbidden)

export default HorizonForbiddenMemo