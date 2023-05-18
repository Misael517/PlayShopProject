import styles from './GamesGenre.module.css';

// game icons:
import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import icon5 from './images/icon5.jpg';
import icon6 from './images/icon6.jpg';

interface GameContent {
    id: number;
    name: string;
    url: string;
    icon: string;
}

function GamesGenre() {
    const gamesContent: GameContent[] = [
        { id: 0, name: 'Action', url: 'https://www.google.com/', icon: icon1, },
        { id: 1, name: 'Adventure', url: 'https://www.google.com/', icon: icon2, },
        { id: 2, name: 'Figthing', url: 'https://www.google.com/', icon: icon3, },
        { id: 3, name: 'Racing', url: 'https://www.google.com/', icon: icon4, },
        { id: 4, name: 'RPG', url: 'https://www.google.com/', icon: icon5, },
        { id: 5, name: 'Shooters', url: 'https://www.google.com/', icon: icon6, },
    ]

    return (
        <>
            <h2 className={styles.sectionName}>Games by genre</h2>
            <div className={styles.itemsGrid}>
                {gamesContent.map((genre) => (
                    <div className={styles.itemsContent} key={genre.id} style={{ backgroundImage: `url(${genre.icon})` }}>


                        <div className={styles.gamesInfo}>
                            <h3>{genre.name}</h3>
                        </div>

                    </div>
                ))}
            </div>
        </>
    )
}

export default GamesGenre