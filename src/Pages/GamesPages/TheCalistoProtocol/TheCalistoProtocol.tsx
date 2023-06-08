import { memo } from 'react';
import styles from '../Styles/pagesStyle.module.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import GameContent from '../../../Components/GameContent/GameContent';
import jsonData from '../../../assets/gamesInfo.json';

// Img imports
import img1 from '/images/gamesImg/TheCalistoProtocol/img1.jpg';
import img2 from '/images/gamesImg/TheCalistoProtocol/img2.jpg';
import img3 from '/images/gamesImg/TheCalistoProtocol/img3.jpg';
import img4 from '/images/gamesImg/TheCalistoProtocol/img4.jpg';
import img5 from '/images/gamesImg/TheCalistoProtocol/img5.jpg';
import img6 from '/images/gamesImg/TheCalistoProtocol/img6.jpg';
import img7 from '/images/gamesImg/TheCalistoProtocol/img7.jpg';

// thumbnails imports
import thumb1 from "/images/gamesImg/TheCalistoProtocol/imageThumbnail/thumb1.jpg";
import thumb2 from "/images/gamesImg/TheCalistoProtocol/imageThumbnail/thumb2.jpg";
import thumb3 from "/images/gamesImg/TheCalistoProtocol/imageThumbnail/thumb3.jpg";
import thumb4 from "/images/gamesImg/TheCalistoProtocol/imageThumbnail/thumb4.jpg";
import thumb5 from "/images/gamesImg/TheCalistoProtocol/imageThumbnail/thumb5.jpg";
import thumb6 from "/images/gamesImg/TheCalistoProtocol/imageThumbnail/thumb6.jpg";

interface ShowCase {
    id: number;
    thumbnail: string;
    image: string;
}

const imgArr: ShowCase[] = [
    {
        id: 0,
        thumbnail: thumb1,
        image: img1
    },
    {
        id: 1,
        thumbnail: thumb2,
        image: img2
    },
    {
        id: 2,
        thumbnail: thumb3,
        image: img3

    },
    {
        id: 3,
        thumbnail: thumb4,
        image: img4,

    },
    {
        id: 4,
        thumbnail: thumb5,
        image: img5
    },
    {
        id: 5,
        thumbnail: thumb6,
        image: img6
    },
]



function TheCalistoProtocol() {
    const currentGame = jsonData[5]

    return (
        <>
            {/* This is the navbar */}
            <header className={styles.header}>
                <Navbar />
            </header>

            {/* This is the main part of the body */}
            <main className={styles.main}>
                <section className={styles.section1}>
                    <GameContent imgArr={imgArr} img7={img7} currentGame={currentGame} />
                </section>
            </main>

            {/* This is the footer, the end of the page */}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>)
}

const TheCalistoProtocolMemo = memo(TheCalistoProtocol)

export default TheCalistoProtocolMemo