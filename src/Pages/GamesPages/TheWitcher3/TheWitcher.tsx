import styles from './TheWitcher.module.css';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import axios from 'axios';

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





function TheWitcher3() {
    return (<> <header className={styles.header}>
        <Navbar />
    </header> <main className={styles.main}

    > <section className={styles.section1}>
            </section>



        </main>


        <footer className={styles.footer}>
            <Footer />
        </footer>
    </>)
}

export default TheWitcher3