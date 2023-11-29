import { useState } from "react";
import { useDispatch } from "react-redux";
import { memo } from "react";
import { addItem } from "../../app/Slices/CartSlice";
import styles from "./GameContent.module.css";
import usePreloadImages from "../../Hooks/usePreloadImages";

interface GamesProps {
  imgArr: {
    id: number;
    thumbnail: string;
    image: string;
  }[];
}

interface ImageProps {
  img7: string;
}

interface Game {
  currentGame: {
    id: number;
    name: string;
    icon: string;
    searchIcon: string;
    link: string;
    price: number;
    comingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
    itemAmount: number;
    cartPrice: number;
    apiSlug: string;
    trailer: string;
    descriptionIndex: number;
  };
}

function GameContent({
  imgArr,
  img7,
  currentGame,
}: GamesProps & ImageProps & Game) {
  const [currentImg, setCurrentImg] = useState<number>(0);
  const dispatch = useDispatch();

  const addImg: string[] = [img7];

  const preloadImages: string[] = imgArr.map((images) => {
    return images.image;
  });

  const preloadThumb: string[] = imgArr.map((images) => {
    return images.thumbnail;
  });

  usePreloadImages(preloadImages);
  usePreloadImages(preloadThumb);
  usePreloadImages(addImg);

  return (
    <>
      {/* This display the images of the current game */}
      <div
        className={styles.imgDisplay}
        style={{ backgroundImage: `url(${imgArr[currentImg].image}) ` }}
        aria-label="current game background image"
      >
        {/* This show things like the price and the add to cart button */}
        <div className={styles.buyingSection}>
          <img
            src={img7}
            className={styles.gamePortrait}
            alt="Game Portrait"
            loading="lazy"
          />

          {/* Game details */}
          <div className={styles.gamesInfo}>
            <h3>Starting at:</h3>

            <div className={styles.gamesPrice}>
              <div className={styles.gamesPrice}>
                <p
                  className={styles.discountColor}
                  style={{
                    display: currentGame.isOnSale ? "inline-block" : "none",
                  }}
                >
                  {currentGame.isOnSale ? `-${currentGame.discount}%` : ""}
                </p>

                <p
                  className={styles.strikeThrough}
                  style={{
                    display: currentGame.isOnSale ? "inline-block" : "none",
                  }}
                >
                  {currentGame.isOnSale ? `${currentGame.price}%` : ""}
                </p>

                <p style={{ textAlign: "center" }}>
                  {currentGame.isOnSale
                    ? `$${currentGame.actualPrice}`
                    : currentGame.comingSoon
                    ? "..."
                    : `$${currentGame.price}`}
                </p>
              </div>
            </div>
          </div>

          <button
            className={styles.addBtn}
            aria-label="Add to cart items"
            onClick={() =>
              currentGame.comingSoon ? "" : dispatch(addItem(currentGame))
            }
          >
            {currentGame.comingSoon ? "No Available" : "Add to cart"}
          </button>
        </div>

        <div className={styles.imgContainer}>
          {imgArr.map((img) => {
            return (
              <img
                src={img.thumbnail}
                className={`${styles.imgItems} ${
                  currentImg === img.id ? styles.selectedImg : ""
                }`}
                key={img.id}
                onClick={() => setCurrentImg(img.id)}
                alt="Game thumbnail"
                loading="lazy"
                role="button"
                tabIndex={0}
              />
            );
          })}
        </div>
      </div>

      {/* Image thumbnails on mobile */}
      <div className={styles.imgContainerMobile}>
        {imgArr.map((img) => {
          return (
            <img
              src={img.thumbnail}
              className={`${styles.imgItemsMobile} ${
                currentImg === img.id ? styles.selectedImg : ""
              }`}
              key={img.id}
              alt="Game thumbnail"
            />
          );
        })}
      </div>
    </>
  );
}

const GameContentMemo = memo(GameContent);

export default GameContentMemo;
