import styles from './MostPopular.module.css';
import { useState } from 'react';

// game icons:
import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import icon5 from './images/icon5.jpg';
import icon6 from './images/icon6.jpg';
import icon7 from './images/icon7.jpg';
import icon8 from './images/icon8.jpg';
import icon9 from './images/icon9.jpg';
import icon10 from './images/icon10.jpg';
import icon11 from './images/icon11.jpg';
import icon12 from './images/icon12.jpg';

// buttons icons:
import leftBtn from './images/R.png';
import rightBtn from './images/L.png';

// Interfaces:

interface Game {
    name: string;
    icon: string;
    price: number;
}

interface GamesGenre {
    id: number,
    games: Game[],
}


function OnSale() {
    const [currentGames, setCurrentGames] = useState<number>(0);

    const handleNext = (): void => {
        if (currentGames < 1) {
            setCurrentGames(currentGames + 1)
        }
    }

    const handleBack = (): void => {
        if (currentGames > 0) {
            setCurrentGames(currentGames - 1)
        }
    }

    const gamesOnSale: GamesGenre[] = [
        {
            id: 0,
            games: [
                {
                    name: 'Grand Theft auto',
                    icon: icon1,
                    price: 60,
                },
                {
                    name: 'Elden Ring',
                    icon: icon2,
                    price: 60,
                },
                {
                    name: 'Stray',
                    icon: icon3,
                    price: 60,
                },
                {
                    name: 'Horizon Forbidden West',
                    icon: icon4,
                    price: 60,
                },
                {
                    name: 'A Plague Tale Requiem',
                    icon: icon5,
                    price: 60,
                },
                {
                    name: 'The Calisto Protocol',
                    icon: icon6,
                    price: 60,
                },
            ]
        },
        {
            id: 1,
            games: [
                {
                    name: 'Need For Speed Unbound',
                    icon: icon7,
                    price: 60,
                },
                {
                    name: 'Gotham Knights',
                    icon: icon8,
                    price: 60,
                },
                {
                    name: 'High On Life',
                    icon: icon9,
                    price: 60,
                },
                {
                    name: 'Sonic Frontiers',
                    icon: icon10,
                    price: 60,
                },
                {
                    name: 'Kirby and the forgotten land',
                    icon: icon11,
                    price: 60,
                },
                {
                    name: 'DyingLight 2',
                    icon: icon12,
                    price: 60,
                },
            ]
        },
    ]

    return (
        <>
            <h2 className={styles.sectionName}>Most Popular</h2>

            <button className={styles.sectionBtn} onClick={handleBack}><img src={rightBtn} className={styles.btnImgLeft} /></button>

            {gamesOnSale[currentGames].games.map((gamesSale) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${gamesSale.icon})` }} >


                    <div className={styles.gamesInfo}>
                        <h3>{gamesSale.name}</h3>
                        <div className={styles.gamesPrice}>
                            <p>${gamesSale.price}</p>
                        </div>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}> <img src={leftBtn} className={styles.btnImgRight} /> </button>
        </>
    )
}

export default OnSale;

