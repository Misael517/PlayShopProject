import styles from './TheWitcher.module.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import axios from 'axios';
import img1 from '/images/gamesImg/TheWitcher3/img1.jpg';
import img2 from '/images/gamesImg/TheWitcher3/img2.jpg';
import img3 from '/images/gamesImg/TheWitcher3/img3.jpg';
import img4 from '/images/gamesImg/TheWitcher3/img4.jpg';
import img5 from '/images/gamesImg/TheWitcher3/img5.jpg';
import img6 from '/images/gamesImg/TheWitcher3/img6.jpg';

const ApiKey = 'e058d628bcbd4d968e31068a9c01c732';
axios.get(`https://api.rawg.io/api/games?key=${ApiKey}`)
    .then((response) => {
        // Handle the response data here
        const gamesData = response.data;
        console.log(gamesData.results[0].short_screenshots[1].image);
    })
    .catch((error) => {
        // Handle any errors here
        console.error(error);
    });

interface showCase {
    img1: string
}



function TheWitcher3() {
    return (<> <header className={styles.header}>
        <Navbar />
    </header>
        <main className={styles.main}>
            <section className={styles.section1}>
                <h2 className={styles.sectionName}>The Witcher 3 Wild Hunt</h2>


                <div className={styles.imgDisplay} style={{ backgroundImage: `url(${img1}) ` }}>

                </div>
            </section>
        </main>


        <footer className={styles.footer}>
            <Footer />
        </footer>
    </>)
}

export default TheWitcher3