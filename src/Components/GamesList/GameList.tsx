import styles from './GameList.module.css';
import jsonData from '../../assets/gamesInfo.json';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
interface Games {
    id: number,
    name: string;
    icon: string;
    searchIcon: string;
    link?: string;
    Platforms: string;
    Publisher: string,
    Genre: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
}


function GameList() {
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.gamesContainer}>
                {jsonData.map((games: Games) => (
                    <div className={styles.itemsContent} key={games.id}>
                        <img src={games.icon} className={styles.itemIcon} onClick={() => navigate(`${games.link}`)} alt='Game Icon'></img>

                        <div className={styles.gamesInfo}>
                            <h3 className={styles.gameName}>{games.name}</h3>
                            <div className={styles.gamesPrice}>
                                <p className={styles.discountColor} style={{ display: games.isOnSale ? 'inline-block' : 'none' }}>{games.isOnSale ? `-${games.discount}%` : ''}</p>
                                <p className={styles.strikeThrough} style={{ display: games.isOnSale ? 'inline-block' : 'none' }}>{games.isOnSale ? `${games.price}%` : ''}</p>
                                <p style={{ textAlign: 'center' }}>{games.isOnSale ? `$${games.actualPrice}` : (games.coomingSoon ? '...' : `$${games.price}`)}</p>
                            </div>
                        </div>
                    </div>))}
            </div>

        </>
    )
}

const GameListMemo = memo(GameList)

export default GameListMemo