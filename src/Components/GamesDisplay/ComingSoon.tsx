import { memo, useRef } from 'react';
import usePreloadImages from '../../Hooks/usePreloadImages';
import styles from './Styles/GamesDisplay.module.css';
import jsonData from '../../assets/gamesInfo.json';


const gamesComing = jsonData.slice(24, 36)


function ComingSoon() {
    const scrollContainerRef = useRef<HTMLUListElement | null>(null);

    const icons: string[] = gamesComing.map((items) => {
        return items.icon
    })

    usePreloadImages(icons)




    const handleClickLeft = () => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const scrollAmount = scrollContainer.clientWidth;
            scrollContainer.scrollLeft -= scrollAmount;
        }
    };


    const handleClickRight = () => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const scrollAmount = scrollContainer.clientWidth;
            scrollContainer.scrollLeft += scrollAmount;
        }
    };

    return (
        <>

            {/* Article header */}
            <div className={styles.itemsHeader}>
                <h2 className={styles.sectionName}>Coming Soon</h2>

                {/* Article buttons */}
                <div className={styles.btnContainer}>

                    {/* Carousel back button */}
                    <div
                        className={styles.sectionBtn}
                        onClick={handleClickLeft}
                        role='button'
                        aria-label='carousel back button'
                        tabIndex={0}
                    >
                        <img src={'/L.png'} className={styles.btnImgLeft} alt='Back Arrow' />
                    </div>


                    {/* Carousel next button */}
                    <div
                        className={styles.sectionBtn}
                        onClick={handleClickRight}
                        role='button'
                        aria-label='carousel next button'
                        tabIndex={0}
                    >
                        <img src={'/R.png'} className={styles.btnImgRight} alt='Next Arrow' />
                    </div>
                </div>
            </div>




            {/* Items carousel */}
            <ul ref={scrollContainerRef} className={styles.itemsCarousel}>
                {gamesComing.map((games) => (

                    <li className={styles.itemsContent} key={games.id} >

                        <a href={`${games.link}`}>
                            <img
                                src={games.icon}
                                className={styles.itemIcon}
                                alt={`${games.name} icon`}
                                aria-label={`${games.name} icon`}
                            >
                            </img>
                        </a>



                        {/* Game details */}
                        <div className={styles.gamesInfo}>
                            <h3 className={styles.gameName}>{games.name}</h3>
                            <div className={styles.gamesPrice}>
                                <p className={styles.discountColor} style={{ display: games.isOnSale ? 'inline-block' : 'none' }}>{games.isOnSale ? `-${games.discount}%` : ''}</p>
                                <p className={styles.strikeThrough} style={{ display: games.isOnSale ? 'inline-block' : 'none' }}>{games.isOnSale ? `${games.price}%` : ''}</p>
                                <p style={{ textAlign: 'center' }}>{games.isOnSale ? `$${games.actualPrice}` : (games.comingSoon ? '...' : `$${games.price}`)}</p>
                            </div>
                        </div>
                    </li>))}
            </ul >
        </>
    )
}

const ComingSoonMemo = memo(ComingSoon)

export default ComingSoonMemo

