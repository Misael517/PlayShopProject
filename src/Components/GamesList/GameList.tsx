import { memo } from "react";
import { useDispatch } from "react-redux";
import { setContentID } from "../../app/Slices/GamesPageSlice";
import styles from "./GameList.module.css";
import jsonData from "../../assets/gamesInfo.json";

interface Games {
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
}

function GameList() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.gamesContainer}>
        {jsonData.map((games: Games) => (
          <div className={styles.itemsContent} key={games.id}>
            <a href={`${games.link}`}>
              <img
                src={games.icon}
                className={styles.itemIcon}
                alt="Game Icon"
                aria-label={`${games.name} icon`}
                onClick={() => dispatch(setContentID(games.id))}
                role="button"
                tabIndex={0}
              ></img>
            </a>

            <div className={styles.gamesInfo}>
              <h3 className={styles.gameName}>{games.name}</h3>
              <div className={styles.gamesPrice}>
                <p
                  className={styles.discountColor}
                  style={{ display: games.isOnSale ? "inline-block" : "none" }}
                >
                  {games.isOnSale ? `-${games.discount}%` : ""}
                </p>
                <p
                  className={styles.strikeThrough}
                  style={{ display: games.isOnSale ? "inline-block" : "none" }}
                >
                  {games.isOnSale ? `${games.price}%` : ""}
                </p>
                <p style={{ textAlign: "center" }}>
                  {games.isOnSale
                    ? `$${games.actualPrice}`
                    : games.comingSoon
                    ? "..."
                    : `$${games.price}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

const GameListMemo = memo(GameList);

export default GameListMemo;
