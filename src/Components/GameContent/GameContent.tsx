import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { memo } from 'react';
import { addItem } from '../../app/Slices/CartSlice';
import styles from './GameContent.module.css';
import usePreloadImages from '../../Hooks/usePreloadImages';

interface GamesProps {
    imgArr: {
        id: number;
        thumbnail: string;
        image: string;
    }[];
}

interface ImageProps {
    img7: string
}

interface Game {
    currentGame: {
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
}

function GameContent({ imgArr, img7, currentGame }: GamesProps & ImageProps & Game) {
    const [currentImg, setCurrentImg] = useState<number>(0)
    const dispatch = useDispatch()

    const preloadImages: string[] = imgArr.map((images) => {
        return images.image
    })

    usePreloadImages(preloadImages)


    return (
        <>
            <section className={styles.section1}>
                {/* This display the images of the current game */}
                <div className={styles.imgDisplay} style={{ backgroundImage: `url(${imgArr[currentImg].image}) ` }}>
                </div>

                <div className={styles.imgContainer}>
                    {imgArr.map((img) => {
                        return (
                            <div key={img.id} className={styles.imgHolder}>
                                <img src={img.thumbnail} className={`${styles.imgItems} ${currentImg === img.id ? styles.selectedImg : ''}`} key={img.id} onClick={() => setCurrentImg(img.id)} alt='Game image' />
                            </div>
                        )
                    })}
                </div>


                {/* This show things like the price and the add to cart button */}
                <div className={styles.buyingSection}>
                    <img src={img7} className={styles.gamePortrait} alt='Game Portrait' />
                    <div className={styles.gamesInfo}>

                        <h3>Starting at:</h3>
                        <div className={styles.gamesPrice}>
                            <p><span className={currentGame.isOnSale ? styles.discountColor : ''}>{currentGame.isOnSale ? `-${currentGame.discount}%` : ''}</span></p>
                            <p><span className={currentGame.isOnSale ? styles.strikeThrough : ''}>{currentGame.isOnSale ? `${currentGame.price}%` : ''}</span></p>
                            <p style={{ textAlign: 'center' }}>{currentGame.isOnSale ? `$${currentGame.actualPrice}` : (currentGame.coomingSoon ? '...' : `$${currentGame.price}`)}</p>
                        </div>
                    </div>
                    <button className={styles.addBtn} onClick={() => currentGame.coomingSoon ? '' : dispatch(addItem(currentGame))}>{currentGame.coomingSoon ? 'No Available' : 'Add to cart'}</button>
                </div>

                {/* This show details about the product */}
                <div className={styles.detailsContainer}>
                    <div>
                        <h3 className={styles.detailsTitle}>Platforms</h3>
                        <p className={styles.detailsContent}>{currentGame.Platforms}</p>
                    </div>

                    <div>
                        <h3 className={styles.detailsTitle}>Publisher</h3>
                        <p className={styles.detailsContent}>{currentGame.Publisher}</p>
                    </div>

                    <div>
                        <h3 className={styles.detailsTitle}>Video Game Genre</h3>
                        <p className={styles.detailsContent}>{currentGame.Genre}</p>
                    </div>
                </div>
            </section>
        </>)
}

const GameContentMemo = memo(GameContent)

export default GameContentMemo