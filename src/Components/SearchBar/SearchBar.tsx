import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../../assets/gamesInfo.json';
import styles from './SearchBar.module.css';


interface Games {
    id: number,
    name: string;
    icon: string;
    searchIcon: string;
    Platforms: string,
    Publisher: string,
    Genre: string,
    link?: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
    itemAmount: number;
    cartPrice: number;
}



function SearchBar() {
    const [currentItem, setCurrentItem] = useState<string>('')
    const [display, setDisplay] = useState<string>('none')
    const navigate = useNavigate()
    const componentRef = useRef<HTMLDivElement>(null)


    // Display the search bar each tiem it finds letters
    const handleSearch = (e: string) => {
        setDisplay('flex')
        const content = e
        setCurrentItem(content)
    }


    // Close the bar when you click outside
    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setDisplay('none');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })

    return (
        <>
            {/* Search Funcionality */}
            <div className={styles.searchContainer} ref={componentRef}>
                <div className={styles.inputContainer}>
                    <input type='text' className={styles.searchInput} placeholder='Search Store' onChange={(e) => handleSearch(e.target.value)} />
                </div>

                <div className={styles.gamesContainer} style={{ display: `${display}` }}>
                    {jsonData.filter((game) => {
                        if (currentItem === '') {
                            return game.name;
                        } else if (game.name.toLocaleLowerCase().includes(currentItem.toLocaleLowerCase())) {
                            return game.name;
                        }

                    }
                    ).splice(0, 4).map((games: Games) => (
                        <div className={styles.itemFrame} key={games.id} onClick={() => navigate(`${games.link ? games.link : ''}`)}>

                            <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.searchIcon})` }}></div>

                            <div className={styles.gamesInfo}>
                                <h3>{games.name}</h3>
                            </div>
                        </div>))}
                </div>
            </div>


        </>
    )
}

export default SearchBar