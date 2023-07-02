import { useNavigate } from 'react-router-dom';
import { memo, useRef } from 'react';
import usePreloadImages from '../../Hooks/usePreloadImages';
import styles from './Styles/GamesDisplay.module.css';
import jsonData from '../../assets/gamesInfo.json';





const gamesPopular = jsonData.slice(0, 12)


function MostPopular() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const icons: string[] = gamesPopular.map((items) => {
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
            <div className={styles.itemsHeader}>
                <h2 className={styles.sectionName}>Most Popular</h2>

                <div className={styles.btnContainer}>
                    <div className={styles.sectionBtn} onClick={handleClickLeft}>
                        <img src={'/L.png'} className={styles.btnImgLeft} alt='Left Arrow' />
                    </div>
                    <div className={styles.sectionBtn} onClick={handleClickRight}>
                        <img src={'/R.png'} className={styles.btnImgRight} alt='Right Arrow' />
                    </div>
                </div>
            </div>

            <div ref={scrollContainerRef} className={styles.itemsCarousel}>
                {gamesPopular.map((games) => (
                    <div className={styles.itemsContent} key={games.id} onClick={() => navigate(`${games.link}`)}>
                        <img src={games.icon} className={styles.itemIcon} alt='game icon'></img>
                        <div className={styles.gamesInfo}>
                            <h3 className={styles.gameName}>{games.name}</h3>
                            <div className={styles.gamesPrice}>
                                <p className={styles.discountColor} style={{ display: games.isOnSale ? 'inline-block' : 'none' }}>{games.isOnSale ? `-${games.discount}%` : ''}</p>
                                <p className={styles.strikeThrough} style={{ display: games.isOnSale ? 'inline-block' : 'none' }}>{games.isOnSale ? `${games.price}%` : ''}</p>
                                <p style={{ textAlign: 'center' }}>{games.isOnSale ? `$${games.actualPrice}` : (games.coomingSoon ? '...' : `$${games.price}`)}</p>
                            </div>
                        </div>

                    </div >))
                }
            </div>
        </>
    )
}

const MostPopularMemo = memo(MostPopular)

export default MostPopularMemo

