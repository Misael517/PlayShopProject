import styles from './OnSale.module.css';
import { useState } from 'react';

// game icons:
import icon1 from '../../assets/Images/icon13.jpg';
import icon2 from '../../assets/Images/icon14.jpg';
import icon3 from '../../assets/Images/icon15.jpg';
import icon4 from '../../assets/Images/icon16.jpg';
import icon5 from '../../assets/Images/icon17.jpg';
import icon6 from '../../assets/Images/icon18.jpg';
import icon7 from '../../assets/Images/icon19.jpg';
import icon8 from '../../assets/Images/icon20.jpg';
import icon9 from '../../assets/Images/icon21.jpg';
import icon10 from '../../assets/Images/icon22.jpg';
import icon11 from '../../assets/Images/icon23.jpg';
import icon12 from '../../assets/Images/icon24.jpg';


// buttons icons:
import leftBtn from '../../assets/Images/R.png';
import rightBtn from '../../assets/Images/L.png';


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
            console.log(currentGames)
        }
    }

    const handleBack = (): void => {
        if (currentGames > 0) {
            setCurrentGames(currentGames - 1)
            console.log(currentGames)
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
                    name: 'God Of War Ragnarok',
                    icon: icon2,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Cyberpunk 2077',
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
                    name: 'Assetto Corsa Competizione',
                    icon: icon5,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Forza Horizon 5',
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
                    name: 'Destiny 2',
                    icon: icon7,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Doom Eternal',
                    icon: icon8,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Horizon Zero Dawn',
                    icon: icon9,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Assassins Creed Valhalla',
                    icon: icon10,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Jedi Fallen Order',
                    icon: icon11,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
                {
                    name: 'Mortal Kombat X',
                    icon: icon12,
                    price: 60,
                    discount: 20,
                    actualPrice: 40,
                },
            ]
        },
    ]

    return (
        <>
            <h2 className={styles.sectionName}>On Sale</h2>

            <button className={styles.sectionBtn} onClick={handleBack}><img src={rightBtn} className={styles.btnImgLeft} /></button>

            {gamesOnSale[currentGames].games.map((gamesSale) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${gamesSale.icon})` }} >


                    <div className={styles.gamesInfo}>
                        <h3>{gamesSale.name}</h3>
                        <div className={styles.gamesPrice}>
                            <p><span className={styles.discountColor}>-{gamesSale.discount}%</span></p>
                            <p><span className={styles.strikeThrough}>${gamesSale.price}</span></p>
                            <p>${gamesSale.actualPrice}</p>
                        </div>
                    </div>
                </div>))}
            <button className={styles.sectionBtn} onClick={handleNext}> <img src={leftBtn} className={styles.btnImgRight} /> </button>
        </>
    )
}

export default OnSale;

