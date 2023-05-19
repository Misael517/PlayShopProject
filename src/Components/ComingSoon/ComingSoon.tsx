import styles from './ComingSoon.module.css';
import { useState } from 'react';
import jsonData from '../../assets/gamesInfo.json';

// Interfaces:
interface Game {
    id: number,
    name: string;
    icon: string;
    price: number;
}

interface GamesGenre {
    id: number,
    games: Game[],
}

const gamesOnSale: GamesGenre[] = [
    {
        id: 0,
        games: [
            {
                id: jsonData[24].id,
                name: jsonData[24].name,
                icon: jsonData[24].icon,
                price: jsonData[24].price,
            },
            {
                id: jsonData[25].id,
                name: jsonData[25].name,
                icon: jsonData[25].icon,
                price: jsonData[25].price,
            },
            {
                id: jsonData[26].id,
                name: jsonData[26].name,
                icon: jsonData[26].icon,
                price: jsonData[26].price,
            },
            {
                id: jsonData[27].id,
                name: jsonData[27].name,
                icon: jsonData[27].icon,
                price: jsonData[27].price,
            },
            {
                id: jsonData[28].id,
                name: jsonData[28].name,
                icon: jsonData[28].icon,
                price: jsonData[28].price,
            },
            {
                id: jsonData[29].id,
                name: jsonData[29].name,
                icon: jsonData[29].icon,
                price: jsonData[29].price,
            },
        ]
    },
    {
        id: 1,
        games: [
            {
                id: jsonData[30].id,
                name: jsonData[30].name,
                icon: jsonData[30].icon,
                price: jsonData[30].price,
            },
            {
                id: jsonData[31].id,
                name: jsonData[31].name,
                icon: jsonData[31].icon,
                price: jsonData[31].price,
            },
            {
                id: jsonData[32].id,
                name: jsonData[32].name,
                icon: jsonData[32].icon,
                price: jsonData[32].price,
            },
            {
                id: jsonData[33].id,
                name: jsonData[33].name,
                icon: jsonData[33].icon,
                price: jsonData[33].price,
            },
            {
                id: jsonData[34].id,
                name: jsonData[34].name,
                icon: jsonData[34].icon,
                price: jsonData[34].price,
            },
            {
                id: jsonData[35].id,
                name: jsonData[35].name,
                icon: jsonData[35].icon,
                price: jsonData[35].price,
            },
        ]
    },
]


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

    return (
        <>
            <h2 className={styles.sectionName}>Coming Soon</h2>

            <button className={styles.sectionBtn} onClick={handleBack}><img src={'/L.png'} className={styles.btnImgLeft} /></button>

            {gamesOnSale[currentGames].games.map((gamesSale) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${gamesSale.icon})` }} key={gamesSale.id}>


                    <div className={styles.gamesInfo}>
                        <h3>{gamesSale.name}</h3>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}><img src={'/R.png'} className={styles.btnImgRight} /></button>
        </>
    )
}

export default OnSale;

