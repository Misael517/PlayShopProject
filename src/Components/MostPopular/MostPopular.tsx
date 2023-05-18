import styles from './MostPopular.module.css';
import { useState } from 'react';

// game icons:
import icon1 from '../../assets/Images/icon1.jpg';
import icon2 from '../../assets/Images/icon2.jpg';
import icon3 from '../../assets/Images/icon3.jpg';
import icon4 from '../../assets/Images/icon4.jpg';
import icon5 from '../../assets/Images/icon5.jpg';
import icon6 from '../../assets/Images/icon6.jpg';
import icon7 from '../../assets/Images/icon7.jpg';
import icon8 from '../../assets/Images/icon8.jpg';
import icon9 from '../../assets/Images/icon9.jpg';
import icon10 from '../../assets/Images/icon10.jpg';
import icon11 from '../../assets/Images/icon11.jpg';
import icon12 from '../../assets/Images/icon12.jpg';

// buttons icons:
import leftBtn from '../../assets/Images/R.png';
import rightBtn from '../../assets/Images/L.png';

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

    const gamesPopular: GamesGenre[] = [
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

            {gamesPopular[currentGames].games.map((games) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.icon})` }} >


                    <div className={styles.gamesInfo}>
                        <h3>{games.name}</h3>
                        <div className={styles.gamesPrice}>
                            <p>${games.price}</p>
                        </div>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}> <img src={leftBtn} className={styles.btnImgRight} /> </button>
        </>
    )
}

export default OnSale;

