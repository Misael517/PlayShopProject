import styles from './GameList.module.css';
import jsonData from '../../assets/gamesInfo.json';
import { useNavigate } from 'react-router-dom';
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
            </div>

        </>
    )
}

export default GameList