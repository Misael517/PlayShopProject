import { memo, useRef } from 'react';
import styles from './Styles/GamesDisplay.module.css';
import jsonData from '../../assets/gamesInfo.json';


// items array
const gamesOnSale = jsonData.slice(12, 24)


function OnSale() {
    const scrollContainerRef = useRef<HTMLUListElement | null>(null);

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

            {/* Aricle header */}
            <div className={styles.itemsHeader}>
                <h2 className={styles.sectionName}>On Sale</h2>

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
                        <img src={'/L.png'} className={styles.btnImgLeft} alt='Back Arrow' loading='lazy' />
                    </div>


                    {/* Carousel next button */}
                    <div
                        className={styles.sectionBtn}
                        onClick={handleClickRight}
                        role='button'
                        aria-label='carousel next button'
                        tabIndex={0}
                    >
                        <img src={'/R.png'} className={styles.btnImgRight} alt='Next Arrow' loading='lazy' />
                    </div>

                </div>
            </div>





            {/* Items carousel */}
            <ul className={styles.itemsCarousel} ref={scrollContainerRef}>

                {gamesOnSale.map((gamesSale) => (
                    <li className={styles.itemsContent} key={gamesSale.id}>

                        <a href={`${gamesSale.link}`}>
                            <img
                                src={gamesSale.icon}
                                className={styles.itemIcon}
                                alt={`${gamesSale.name} icon`}
                                aria-label={`${gamesSale.name} icon`}
                                loading='lazy'
                            >
                            </img>
                        </a>

                        {/* Game details */}
                        < div className={styles.gamesInfo} >
                            <h3 className={styles.gameName}>{gamesSale.name}</h3>

                            <div className={styles.gamesPrice}>
                                <p
                                    className={styles.discountColor}
                                    style={{ display: gamesSale.isOnSale ? 'inline-block' : 'none' }}
                                >
                                    {gamesSale.isOnSale ? `-${gamesSale.discount}%` : ''}
                                </p>


                                <p
                                    className={styles.strikeThrough}
                                    style={{ display: gamesSale.isOnSale ? 'inline-block' : 'none' }}
                                >
                                    {gamesSale.isOnSale ? `${gamesSale.price}%` : ''}
                                </p>


                                <p style={{ textAlign: 'center' }}>
                                    {gamesSale.isOnSale ? `$${gamesSale.actualPrice}` : (gamesSale.comingSoon ? '...' : `$${gamesSale.price}`)}
                                </p>
                            </div>
                        </div>
                    </li >))}
            </ul >
        </>
    )
}

const OnSaleMemo = memo(OnSale)

export default OnSaleMemo;

