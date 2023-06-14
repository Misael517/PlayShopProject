import { useNavigate } from 'react-router-dom';
import { memo, useRef } from 'react';
import usePreloadImages from '../../Hooks/usePreloadImages';
import styles from './Styles/GamesDisplay.module.css';
import jsonData from '../../assets/gamesInfo.json';


const gamesCooming = jsonData.slice(24, 36)


function CoomingSoon() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const icons: string[] = gamesCooming.map((items) => {
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
        <div className={styles.carousel}>
            <div className={styles.alingTitle}>
                <h2 className={styles.sectionName}>Cooming </h2>

                <div className={styles.btnContainer}>
                    <div className={styles.sectionBtn} onClick={handleClickLeft}>
                        <img src={'/L.png'} className={styles.btnImgLeft} alt='Left Arrow' />
                    </div>
                    <div className={styles.sectionBtn} onClick={handleClickRight}>
                        <img src={'/R.png'} className={styles.btnImgRight} alt='Right Arrow' />
                    </div>
                </div>
            </div>

            <div ref={scrollContainerRef} className={styles.itemsContainer}>
                {gamesCooming.map((games) => (
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
        </div>
    )
}

const CoomingSoonMemo = memo(CoomingSoon)

export default CoomingSoonMemo

