import styles from './JediSurvivor.module.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import jsonData from '../../../assets/gamesInfo.json';
import { useState } from 'react';

// Img imports
import img1 from '/images/gamesImg/JediSurvivor/img1.jpg';
import img2 from '/images/gamesImg/JediSurvivor/img2.jpg';
import img3 from '/images/gamesImg/JediSurvivor/img3.jpg';
import img4 from '/images/gamesImg/JediSurvivor/img4.jpg';
import img5 from '/images/gamesImg/JediSurvivor/img5.jpg';
import img6 from '/images/gamesImg/JediSurvivor/img6.jpg';
import img7 from '/images/gamesImg/JediSurvivor/img7.jpg';

// thumbnails imports
import thumb1 from "/images/gamesImg/JediSurvivor/imageThumbnail/thumb1.jpg";
import thumb2 from "/images/gamesImg/JediSurvivor/imageThumbnail/thumb2.jpg";
import thumb3 from "/images/gamesImg/JediSurvivor/imageThumbnail/thumb3.jpg";
import thumb4 from "/images/gamesImg/JediSurvivor/imageThumbnail/thumb4.jpg";
import thumb5 from "/images/gamesImg/JediSurvivor/imageThumbnail/thumb5.jpg";
import thumb6 from "/images/gamesImg/JediSurvivor/imageThumbnail/thumb6.jpg";

interface showCase {
    id: number;
    thumbnail: string;
    image: string;
}

const imgArr: showCase[] = [
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



function JediSurvivor() {
    const [currentImg, setCurrentImg] = useState<number>(0)

    return (
        <>
            {/* This is the navbar */}
            <header className={styles.header}>
                <Navbar />
            </header>

            {/* This is the main part of the body */}
            <main className={styles.main}>


                <section className={styles.section1}>
                    {/* This display the images of the current game */}
                    <div className={styles.imgDisplay} style={{ backgroundImage: `url(${imgArr[currentImg].image}) ` }}>
                    </div>

                    <div className={styles.imgContainer}>
                        {imgArr.map((img) => {
                            return (
                                <>
                                    <img src={img.thumbnail} key={img.id} className={`${styles.imgItems} ${currentImg === img.id ? styles.selectedImg : ''}`} onClick={() => setCurrentImg(img.id)} />
                                </>
                            )
                        })}
                    </div>



                    {/* This show things like the price and the add to cart button */}
                    <div className={styles.buyingSection}>
                        <img src={img7} className={styles.gamePortrait} />
                        <div className={styles.gamesInfo}>

                            <h3>Starting at:</h3>
                            <div className={styles.gamesPrice}>
                                <p><span className={jsonData[40].isOnSale ? styles.discountColor : ''}>{jsonData[40].isOnSale ? `-${jsonData[40].discount}%` : ''}</span></p>
                                <p><span className={jsonData[40].isOnSale ? styles.strikeThrough : ''}>{jsonData[40].isOnSale ? `${jsonData[40].price}%` : ''}</span></p>
                                <p style={{ textAlign: 'center' }}>{jsonData[40].isOnSale ? `$${jsonData[40].actualPrice}` : (jsonData[40].coomingSoon ? '...' : `$${jsonData[40].price}`)}</p>
                            </div>
                        </div>
                        <button className={styles.addBtn}><a target="_blank" href={''}></a>Add to cart</button>
                    </div>

                    {/* This show details about the product */}
                    <div className={styles.detailsContainer}>
                        <div>
                            <h3 className={styles.detailsTitle}>Platforms</h3>
                            <p className={styles.detailsContent}>{jsonData[40].Platforms}</p>
                        </div>

                        <div>
                            <h3 className={styles.detailsTitle}>Publisher</h3>
                            <p className={styles.detailsContent}>{jsonData[40].Publisher}</p>
                        </div>

                        <div>
                            <h3 className={styles.detailsTitle}>Video Game Genre</h3>
                            <p className={styles.detailsContent}>{jsonData[40].Genre}</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* This is the footer, the end of the page */}
            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>)
}

export default JediSurvivor