import { memo } from "react";
import { useDispatch } from "react-redux";
import { setContentID } from "../../app/Slices/GamesPageSlice";
import styles from "./AdGames.module.css";
import useGetImages from "../../Hooks/useGetImages";
import jsonData from "../../assets/gamesInfo.json";

interface GameContent {
  id: number;
  name: string;
  link?: string;
  price: number;
  icon: string;
}

function AdGames() {
  const dispatch = useDispatch();
  const {
    data: images,
    isLoading,
    isError,
  } = useGetImages(
    "bestOfTheYear",
    "/images/bestOfTheYear/",
    "icon",
    ".webp",
    6
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  // Create an array of images
  const gamesContent: GameContent[] = [
    {
      id: jsonData[40].id,
      name: jsonData[40].name,
      link: jsonData[40].link,
      price: jsonData[40].price,
      icon: images[5],
    },
    {
      id: jsonData[37].id,
      name: jsonData[37].name,
      link: jsonData[37].link,
      price: jsonData[37].price,
      icon: images[1],
    },
  ];

  return (
    <>
      <div className={styles.itemsContainer}>
        <a href={`${gamesContent[0].link}`} className={styles.itemIcon1}>
          <img
            src={gamesContent[0].icon}
            className={styles.itemIcon}
            alt={`${gamesContent[0].name} icon`}
            aria-label={`${gamesContent[0].name} icon`}
            loading="lazy"
            onClick={() => dispatch(setContentID(gamesContent[0].id))}
            role="button"
            tabIndex={0}
          ></img>

          <div className={styles.descContainerSmall}>
            <h2>Hogwarts Legacy</h2>
            <p>{gamesContent[0].price}$</p>
          </div>
        </a>

        <a href={`${gamesContent[1].link}`} className={styles.itemIcon2}>
          <img
            src={gamesContent[1].icon}
            className={styles.itemIcon}
            alt={`${gamesContent[1].name} icon`}
            aria-label={`${gamesContent[1].name} icon`}
            loading="lazy"
            onClick={() => dispatch(setContentID(gamesContent[1].id))}
            role="button"
            tabIndex={0}
          ></img>

          <div className={styles.descContainerSmall}>
            <h2>Jedi Survivor</h2>
            <p>{gamesContent[1].price}$</p>
          </div>
        </a>
      </div>
    </>
  );
}

const AdGamesMemo = memo(AdGames);

export default AdGamesMemo;
