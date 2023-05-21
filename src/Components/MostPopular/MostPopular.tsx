import styles from './MostPopular.module.css';
import { useState } from 'react';
import jsonData from '../../assets/gamesInfo.json';
import { useNavigate } from 'react-router-dom';

// Interfaces:
interface Game {
    id: number,
    name: string;
    icon: string;
    link?: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
}


interface GamesGenre {
    id: number,
    games: Game[],
}

const gamesPopular: GamesGenre[] = [
    {
        id: 0,
        games: [
            {
                id: 0,
                name: jsonData[0].name,
                icon: jsonData[0].icon,
                link: jsonData[0].link,
                isOnSale: jsonData[0].isOnSale,
                price: jsonData[0].price,
                coomingSoon: jsonData[0].coomingSoon,
                discount: jsonData[0].discount,
                actualPrice: jsonData[0].actualPrice,
            },
            {
                id: 1,
                name: jsonData[1].name,
                icon: jsonData[1].icon,
                link: jsonData[1].link,
                isOnSale: jsonData[1].isOnSale,
                price: jsonData[1].price,
                coomingSoon: jsonData[1].coomingSoon,
                discount: jsonData[1].discount,
                actualPrice: jsonData[1].actualPrice,
            },
            {
                id: 2,
                name: jsonData[2].name,
                icon: jsonData[2].icon,
                link: jsonData[2].link,
                isOnSale: jsonData[2].isOnSale,
                price: jsonData[2].price,
                coomingSoon: jsonData[2].coomingSoon,
                discount: jsonData[2].discount,
                actualPrice: jsonData[2].actualPrice,
            },
            {
                id: 3,
                name: jsonData[3].name,
                icon: jsonData[3].icon,
                link: jsonData[3].link,
                isOnSale: jsonData[3].isOnSale,
                price: jsonData[3].price,
                coomingSoon: jsonData[3].coomingSoon,
                discount: jsonData[3].discount,
                actualPrice: jsonData[3].actualPrice,
            },
            {
                id: 4,
                name: jsonData[4].name,
                icon: jsonData[4].icon,
                link: jsonData[4].link,
                isOnSale: jsonData[4].isOnSale,
                price: jsonData[4].price,
                coomingSoon: jsonData[4].coomingSoon,
                discount: jsonData[4].discount,
                actualPrice: jsonData[4].actualPrice,
            },
            {
                id: 5,
                name: jsonData[5].name,
                icon: jsonData[5].icon,
                link: jsonData[5].link,
                isOnSale: jsonData[5].isOnSale,
                coomingSoon: jsonData[5].coomingSoon,
                price: jsonData[5].price,
                discount: jsonData[5].discount,
                actualPrice: jsonData[5].actualPrice,
            },

        ]
    },
    {
        id: 1,
        games: [
            {
                id: 6,
                name: jsonData[6].name,
                icon: jsonData[6].icon,
                link: jsonData[6].link,
                isOnSale: jsonData[6].isOnSale,
                coomingSoon: jsonData[6].coomingSoon,
                price: jsonData[6].price,
                discount: jsonData[6].discount,
                actualPrice: jsonData[6].actualPrice,
            },
            {
                id: 7,
                name: jsonData[7].name,
                icon: jsonData[7].icon,
                link: jsonData[7].link,
                isOnSale: jsonData[7].isOnSale,
                coomingSoon: jsonData[7].coomingSoon,
                price: jsonData[7].price,
                discount: jsonData[7].discount,
                actualPrice: jsonData[7].actualPrice,
            },
            {
                id: 8,
                name: jsonData[8].name,
                icon: jsonData[8].icon,
                link: jsonData[8].link,
                isOnSale: jsonData[8].isOnSale,
                price: jsonData[8].price,
                coomingSoon: jsonData[8].coomingSoon,
                discount: jsonData[8].discount,
                actualPrice: jsonData[8].actualPrice,
            },
            {
                id: 9,
                name: jsonData[9].name,
                icon: jsonData[9].icon,
                link: jsonData[9].link,
                isOnSale: jsonData[9].isOnSale,
                price: jsonData[9].price,
                coomingSoon: jsonData[9].coomingSoon,
                discount: jsonData[9].discount,
                actualPrice: jsonData[9].actualPrice,
            },
            {
                id: 10,
                name: jsonData[10].name,
                icon: jsonData[10].icon,
                link: jsonData[10].link,
                isOnSale: jsonData[10].isOnSale,
                price: jsonData[10].price,
                coomingSoon: jsonData[10].coomingSoon,
                discount: jsonData[10].discount,
                actualPrice: jsonData[10].actualPrice,
            },
            {
                id: 11,
                name: jsonData[11].name,
                icon: jsonData[11].icon,
                link: jsonData[11].link,
                isOnSale: jsonData[11].isOnSale,
                price: jsonData[11].price,
                coomingSoon: jsonData[11].coomingSoon,
                discount: jsonData[11].discount,
                actualPrice: jsonData[11].actualPrice,
            },
        ]
    },
]



function OnSale() {
    const [currentGames, setCurrentGames] = useState<number>(0);
    const navigate = useNavigate()

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
            <h2 className={styles.sectionName}>Most Popular</h2>

            <button className={styles.sectionBtn} onClick={handleBack}><img src={'/L.png'} className={styles.btnImgLeft} /></button>

            {gamesPopular[currentGames].games.map((games) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.icon})` }} key={games.id} onClick={() => navigate(`${games.link}`)}>


                    <div className={styles.gamesInfo}>
                        <h3>{games.name}</h3>
                        <div className={styles.gamesPrice}>
                            <p><span className={games.isOnSale ? styles.discountColor : ''}>{games.isOnSale ? `-${games.discount}%` : ''}</span></p>
                            <p><span className={games.isOnSale ? styles.strikeThrough : ''}>{games.isOnSale ? `${games.price}%` : ''}</span></p>
                            <p style={{ textAlign: 'center' }}>{games.isOnSale ? `$${games.actualPrice}` : (games.coomingSoon ? '...' : `$${games.price}`)}</p>
                        </div>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}> <img src={'/R.png'} className={styles.btnImgRight} /> </button>
        </>
    )
}

export default OnSale;

