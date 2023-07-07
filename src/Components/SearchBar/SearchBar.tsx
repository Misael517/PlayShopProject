import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsonData from '../../assets/gamesInfo.json';
import styles from './SearchBar.module.css';
import usePreloadImages from '../../Hooks/usePreloadImages';


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
    comingSoon: boolean;
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


    const preloadIcons: string[] = jsonData.map((images) => {
        return images.searchIcon
    })

    usePreloadImages(preloadIcons)

    // Generate an ID for the search bar
    const searchBarID = crypto.randomUUID()


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
    }, [])

    return (
        <>
            {/* Search Funcionality */}
            <div className={styles.searchContainer} ref={componentRef}>
                <label className={styles.inputContainer} htmlFor={searchBarID}>
                    <input
                        type='text'
                        id={searchBarID}
                        className={styles.searchInput}
                        name='searchBar'
                        placeholder='Search Store'
                        onChange={(e) => handleSearch(e.target.value)}
                        aria-label="Search store's items"
                    />
                </label>

                <div className={styles.gamesContainer} style={{ display: `${display}` }}>
                    {jsonData.filter((game) => {
                        if (currentItem === '') {
                            return game.name;
                        } else if (game.name.toLocaleLowerCase().includes(currentItem.toLocaleLowerCase())) {
                            return game.name;
                        }

                    }
                    ).splice(0, 4).map((games: Games) => (
                        <div
                            className={styles.itemFrame}
                            key={games.id}
                            onClick={() => navigate(`${games.link ? games.link : ''}`)}
                            role='button'
                            aria-label={`${games.name} page button`}
                            tabIndex={0}
                        >

                            <img
                                className={styles.itemsImage}
                                src={`${games.searchIcon}`}
                                alt={`${games.name} search icon`}
                                loading='lazy'
                            >
                            </img>

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