import { useNavigate } from 'react-router-dom';
import { memo, useRef } from 'react';
import usePreloadImages from '../../Hooks/usePreloadImages';
import styles from './Styles/GamesDisplay.module.css';
import jsonData from '../../assets/gamesInfo.json';


const gamesOnSale = jsonData.slice(12, 24)


function OnSale() {
    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    const navigate = useNavigate();

    const icons: string[] = gamesOnSale.map((items) => {
        return items.icon
    })

    usePreloadImages(icons)


    const handleClickLeft = () => {
        const scrollContainer = scrollContainerRef.current;


        if (scrollContainer) {
            const scrollAmount = scrollContainer.clientWidth

            scrollContainer.scrollLeft -= scrollAmount;
        }
    };


    const handleClickRight = () => {
        const scrollContainer = scrollContainerRef.current;

        if (scrollContainer) {
            const scrollAmount = scrollContainer.clientWidth

            scrollContainer.scrollLeft += scrollAmount;
        }
    };


    return (
        <>
            <div className={styles.itemsHeader}>
                <h2 className={styles.sectionName}>On Sale</h2>

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
                {gamesOnSale.map((gamesSale) => (
                    <div className={styles.itemsContent} key={gamesSale.id} onClick={() => navigate(`${gamesSale.link}`)}>
                        <img src={gamesSale.icon} className={styles.itemIcon} alt='Game Icon'></img>

                        <div className={styles.gamesInfo}>
                            <h3 className={styles.gameName}>{gamesSale.name}</h3>
                            <div className={styles.gamesPrice}>
                                <p className={styles.discountColor} style={{ display: gamesSale.isOnSale ? 'inline-block' : 'none' }}>{gamesSale.isOnSale ? `-${gamesSale.discount}%` : ''}</p>
                                <p className={styles.strikeThrough} style={{ display: gamesSale.isOnSale ? 'inline-block' : 'none' }}>{gamesSale.isOnSale ? `${gamesSale.price}%` : ''}</p>
                                <p style={{ textAlign: 'center' }}>{gamesSale.isOnSale ? `$${gamesSale.actualPrice}` : (gamesSale.coomingSoon ? '...' : `$${gamesSale.price}`)}</p>
                            </div>
                        </div>
                    </div >))}
            </div>
        </>
    )
}

const OnSaleMemo = memo(OnSale)

export default OnSaleMemo;

