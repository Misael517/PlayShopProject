import styles from './SearchBar.module.css';
import jsonData from '../../assets/gamesInfo.json';
import { useState } from 'react';

interface GamesFilter {
    id: number,
    name: string;
    icon: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
}


function SearchBar() {
    const [searchItem, setSearchItem] = useState<string>('')

    return (
        <>

            <h1 className={styles.pageTitle}>Find any Video Game</h1>

            <div className={styles.searchContainer}>
                <input type='text' className={styles.searchInput} placeholder='search...' onChange={(e) => { setSearchItem(e.target.value) }}></input>
                <button className={styles.filterBtn}>Filter</button>
            </div>

            <div className={styles.gamesContainer}>
                {jsonData.filter((games: GamesFilter) => {
                    if (searchItem === '') {
                        return games
                    } else if (games.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())) {
                        return games
                    }

                }
                ).map((games: GamesFilter) => (
                    <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.icon})` }} key={games.id}>


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

export default SearchBar