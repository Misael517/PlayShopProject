import styles from './BestOfTheYear.module.css';

// game icons:
import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import icon5 from './images/icon5.jpg';
import icon6 from './images/icon6.jpg';

interface GameContent {
    id: number;
    url: string;
    icon: string;
}

function BestOfTheYear() {
    const gamesContent: GameContent[] = [
        { id: 0, url: 'https://www.google.com/', icon: icon1, },
        { id: 1, url: 'https://www.google.com/', icon: icon2, },
        { id: 2, url: 'https://www.google.com/', icon: icon3, },
        { id: 3, url: 'https://www.google.com/', icon: icon4, },
        { id: 4, url: 'https://www.google.com/', icon: icon5, },
        { id: 5, url: 'https://www.google.com/', icon: icon6, },
    ]

    return (
        <>
            <h2 className={styles.sectionName}>Best of the year</h2>
            <div className={styles.itemsGrid}>
                {gamesContent.map((game) => (
                    <div className={styles.itemsContent} key={game.id} style={{ backgroundImage: `url(${game.icon})` }}>

                    </div>
                ))}
            </div>
        </>
    )
}

export default BestOfTheYear