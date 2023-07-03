import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { memo } from 'react';
import { addItem } from '../../app/Slices/CartSlice';
import styles from './GameContent.module.css'
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

    const addImg: string[] = [img7]

    const preloadImages: string[] = imgArr.map((images) => {
        return images.image
    })

    const preloadThumb: string[] = imgArr.map((images) => {
        return images.thumbnail
    })

    usePreloadImages(preloadImages)
    usePreloadImages(preloadThumb)
    usePreloadImages(addImg)

    return (
        <>
            {/* This display the images of the current game */}
            <div className={styles.imgDisplay} style={{ backgroundImage: `url(${imgArr[currentImg].image}) ` }}>

                {/* This show things like the price and the add to cart button */}
                <div className={styles.buyingSection}>
                    <img src={img7} className={styles.gamePortrait} alt='Game Portrait' />

                    <div className={styles.gamesInfo}>
                        <h3>Starting at:</h3>
                        <div className={styles.gamesPrice}>
                            <div className={styles.gamesPrice}>
                                <p className={styles.discountColor} style={{ display: currentGame.isOnSale ? 'inline-block' : 'none' }}>{currentGame.isOnSale ? `-${currentGame.discount}%` : ''}</p>
                                <p className={styles.strikeThrough} style={{ display: currentGame.isOnSale ? 'inline-block' : 'none' }}>{currentGame.isOnSale ? `${currentGame.price}%` : ''}</p>
                                <p style={{ textAlign: 'center' }}>{currentGame.isOnSale ? `$${currentGame.actualPrice}` : (currentGame.coomingSoon ? '...' : `$${currentGame.price}`)}</p>
                            </div>
                        </div>
                    </div>
                    <button className={styles.addBtn} onClick={() => currentGame.coomingSoon ? '' : dispatch(addItem(currentGame))}>{currentGame.coomingSoon ? 'No Available' : 'Add to cart'}</button>
                </div>

                <div className={styles.imgContainer}>
                    {imgArr.map((img) => {
                        return (
                            <img
                                src={img.thumbnail}
                                className={`${styles.imgItems} ${currentImg === img.id ? styles.selectedImg : ''}`}
                                key={img.id} onClick={() => setCurrentImg(img.id)}
                                alt='Game thumbnail'
                            />
                        )
                    })}
                </div>
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
        </>)
}

const GameContentMemo = memo(GameContent)

export default GameContentMemo