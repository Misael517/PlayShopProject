import styles from './OnSale.module.css';
import { useState } from 'react';
import jsonData from '../../assets/gamesInfo.json';


// Interfaces:
interface Game {
    id: number,
    name: string;
    icon: string;
    price: number;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
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
                id: jsonData[12].id,
                name: jsonData[12].name,
                icon: jsonData[12].icon,
                price: jsonData[12].price,
                isOnSale: jsonData[12].isOnSale,
                discount: jsonData[12].discount,
                actualPrice: jsonData[12].actualPrice
            },
            {
                id: jsonData[13].id,
                name: jsonData[13].name,
                icon: jsonData[13].icon,
                price: jsonData[13].price,
                isOnSale: jsonData[13].isOnSale,
                discount: jsonData[13].discount,
                actualPrice: jsonData[13].actualPrice
            },
            {
                id: jsonData[14].id,
                name: jsonData[14].name,
                icon: jsonData[14].icon,
                price: jsonData[14].price,
                isOnSale: jsonData[14].isOnSale,
                discount: jsonData[14].discount,
                actualPrice: jsonData[14].actualPrice
            },
            {
                id: jsonData[15].id,
                name: jsonData[15].name,
                icon: jsonData[15].icon,
                price: jsonData[15].price,
                isOnSale: jsonData[15].isOnSale,
                discount: jsonData[15].discount,
                actualPrice: jsonData[15].actualPrice
            },
            {
                id: jsonData[16].id,
                name: jsonData[16].name,
                icon: jsonData[16].icon,
                price: jsonData[16].price,
                isOnSale: jsonData[16].isOnSale,
                discount: jsonData[16].discount,
                actualPrice: jsonData[16].actualPrice
            },
            {
                id: jsonData[17].id,
                name: jsonData[17].name,
                icon: jsonData[17].icon,
                price: jsonData[17].price,
                isOnSale: jsonData[17].isOnSale,
                discount: jsonData[17].discount,
                actualPrice: jsonData[17].actualPrice
            },
        ]
    },
    {
        id: 1,
        games: [
            {
                id: jsonData[18].id,
                name: jsonData[18].name,
                icon: jsonData[18].icon,
                price: jsonData[18].price,
                isOnSale: jsonData[18].isOnSale,
                discount: jsonData[18].discount,
                actualPrice: jsonData[18].actualPrice
            },
            {
                id: jsonData[19].id,
                name: jsonData[19].name,
                icon: jsonData[19].icon,
                price: jsonData[19].price,
                isOnSale: jsonData[19].isOnSale,
                discount: jsonData[19].discount,
                actualPrice: jsonData[19].actualPrice
            },
            {
                id: jsonData[20].id,
                name: jsonData[20].name,
                icon: jsonData[20].icon,
                price: jsonData[20].price,
                isOnSale: jsonData[20].isOnSale,
                discount: jsonData[20].discount,
                actualPrice: jsonData[20].actualPrice
            },
            {
                id: jsonData[21].id,
                name: jsonData[21].name,
                icon: jsonData[21].icon,
                price: jsonData[21].price,
                isOnSale: jsonData[21].isOnSale,
                discount: jsonData[21].discount,
                actualPrice: jsonData[21].actualPrice
            },
            {
                id: jsonData[22].id,
                name: jsonData[22].name,
                icon: jsonData[22].icon,
                price: jsonData[22].price,
                isOnSale: jsonData[22].isOnSale,
                discount: jsonData[22].discount,
                actualPrice: jsonData[22].actualPrice
            },
            {
                id: jsonData[23].id,
                name: jsonData[23].name,
                icon: jsonData[23].icon,
                price: jsonData[23].price,
                isOnSale: jsonData[23].isOnSale,
                discount: jsonData[23].discount,
                actualPrice: jsonData[23].actualPrice
            },
        ]
    },
]


function OnSale() {
    const [currentGames, setCurrentGames] = useState<number>(0);

    const handleNext = (): void => {
        if (currentGames < 1) {
            setCurrentGames(currentGames + 1)
            console.log(currentGames)
        }
    }

    const handleBack = (): void => {
        if (currentGames > 0) {
            setCurrentGames(currentGames - 1)
            console.log(currentGames)
        }
    }

    return (
        <>
            <h2 className={styles.sectionName}>On Sale</h2>

            <button className={styles.sectionBtn} onClick={handleBack}><img src={'/L.png'} className={styles.btnImgLeft} /></button>

            {gamesOnSale[currentGames].games.map((gamesSale) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${gamesSale.icon})` }} key={gamesSale.id}>


                    <div className={styles.gamesInfo}>
                        <h3>{gamesSale.name}</h3>
                        <div className={styles.gamesPrice}>
                            <p><span className={gamesSale.isOnSale ? styles.discountColor : ''}>{gamesSale.isOnSale ? `-${gamesSale.discount}%` : ''}</span></p>
                            <p><span className={gamesSale.isOnSale ? styles.strikeThrough : ''}>{gamesSale.isOnSale ? `${gamesSale.price}%` : ''}</span></p>
                            <p>{gamesSale.isOnSale ? `$${gamesSale.actualPrice}` : `$${gamesSale.price}`}</p>
                        </div>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}> <img src={'/R.png'} className={styles.btnImgRight} /> </button>
        </>
    )
}

export default OnSale;

