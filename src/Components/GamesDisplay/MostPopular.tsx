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
        <div className={styles.carousel}>


            <div className={styles.alingTitle}>
                <h2 className={styles.sectionName}>Popular</h2>

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
                {gamesPopular.map((gamesSale) => (
                    <div className={styles.itemsContent} style={{ backgroundImage: `url(${gamesSale.icon})` }} key={gamesSale.id} onClick={() => navigate(`${gamesSale.link}`)}>
                        <div className={styles.gamesInfo}>
                            <h3>{gamesSale.name}</h3>
                            <div className={styles.gamesPrice}>
                                <p><span className={gamesSale.isOnSale ? styles.discountColor : ''}>{gamesSale.isOnSale ? `-${gamesSale.discount}%` : ''}</span></p>
                                <p><span className={gamesSale.isOnSale ? styles.strikeThrough : ''}>{gamesSale.isOnSale ? `${gamesSale.price}%` : ''}</span></p>
                                <p>{gamesSale.isOnSale ? `$${gamesSale.actualPrice}` : `$${gamesSale.price}`}</p>
                            </div>
                        </div>

                    </div >))
                }
            </div>
        </div>
    )
}

const MostPopularMemo = memo(MostPopular)

export default MostPopularMemo

