import styles from './ComingSoon.module.css';
import { useState } from 'react';

// game icons:
import icon1 from '../../assets/Images/icon25.jpg';
import icon2 from '../../assets/Images/icon26.jpg';
import icon3 from '../../assets/Images/icon27.jpg';
import icon4 from '../../assets/Images/icon28.jpg';
import icon5 from '../../assets/Images/icon29.jpg';
import icon6 from '../../assets/Images/icon30.jpg';
import icon7 from '../../assets/Images/icon31.jpg';
import icon8 from '../../assets/Images/icon32.jpg';
import icon9 from '../../assets/Images/icon33.jpg';
import icon10 from '../../assets/Images/icon34.jpg';
import icon11 from '../../assets/Images/icon35.jpg';
import icon12 from '../../assets/Images/icon36.jpg';

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

    const gamesOnSale: GamesGenre[] = [
        {
            id: 0,
            games: [
                {
                    name: 'Stalker 2',
                    icon: icon1,
                    price: 60,
                },
                {
                    name: 'Black Myth: Wukong',
                    icon: icon2,
                    price: 60,
                },
                {
                    name: 'Suicide Squad',
                    icon: icon3,
                    price: 60,
                },
                {
                    name: 'Rose Of The Ronin',
                    icon: icon4,
                    price: 60,
                },
                {
                    name: 'Forza Motosport',
                    icon: icon5,
                    price: 60,
                },
                {
                    name: 'Starfield',
                    icon: icon6,
                    price: 60,
                },
            ]
        },
        {
            id: 1,
            games: [
                {
                    name: 'The Day Before',
                    icon: icon7,
                    price: 60,
                },
                {
                    name: 'Robocop Rogue City',
                    icon: icon8,
                    price: 60,
                },
                {
                    name: 'Lies of P',
                    icon: icon9,
                    price: 60,
                },
                {
                    name: 'Inmortals of aveum',
                    icon: icon10,
                    price: 60,
                },
                {
                    name: 'Final Fantasy XVI',
                    icon: icon11,
                    price: 60,
                },
                {
                    name: 'Pikmin 4',
                    icon: icon12,
                    price: 60,
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

