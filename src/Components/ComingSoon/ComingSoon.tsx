import styles from './ComingSoon.module.css';
import { useState } from 'react';

// game icons:
import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import icon5 from './images/icon5.jpg';
import icon6 from './images/icon6.jpg';

// buttons icons:
import leftBtn from './images/R.png';
import rightBtn from './images/L.png';

// Interfaces:

interface Game {
    name: string;
    icon: string;
    price: number;
    discount: number;
    actualPrice: number;
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
                    name: 'The Witcher',
                    icon: icon1,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'God Of War Ragnarok ',
                    icon: icon2,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Jedi Survivor',
                    icon: icon3,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Kena Bridge of Spirits',
                    icon: icon4,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Kena Bridge of Spirits',
                    icon: icon5,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Kena Bridge of Spirits',
                    icon: icon6,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
            ]
        },
        {
            id: 1,
            games: [
                {
                    name: 'Assetto Corsa',
                    icon: '',
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Assetto Corsa Competizione',
                    icon: '',
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'iRacing',
                    icon: icon1,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Forza Horizon 5',
                    icon: '',
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Kena Bridge of Spirits',
                    icon: icon4,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Kena Bridge of Spirits',
                    icon: icon5,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
            ]
        },
    ]

    return (
        <>
            <h2 className={styles.sectionName}>Coming Soon</h2>

            <button className={styles.sectionBtn} onClick={handleBack}><img src={rightBtn} className={styles.btnImgLeft} /></button>

            {gamesOnSale[currentGames].games.map((gamesSale) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${gamesSale.icon})` }} >


                    <div className={styles.gamesInfo}>
                        <h3>{gamesSale.name}</h3>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}><img src={leftBtn} className={styles.btnImgRight} /></button>
        </>
    )
}

export default OnSale;

