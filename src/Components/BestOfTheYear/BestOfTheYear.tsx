import { memo } from "react";
import { useDispatch } from "react-redux";
import { setContentID } from "../../app/Slices/GamesPageSlice";
import styles from "./BestOfTheYear.module.css";
import useGetImages from "../../Hooks/useGetImages";
import jsonData from "../../assets/gamesInfo.json";

interface GameContent {
  id: number;
  name: string;
  link?: string;
  price: number;
  icon: string;
}

function BestOfTheYear() {
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
      id: jsonData[36].id,
      name: jsonData[36].name,
      link: jsonData[36].link,
      price: jsonData[36].price,
      icon: images[0],
    },
    {
      id: jsonData[39].id,
      name: jsonData[39].name,
      link: jsonData[39].link,
      price: jsonData[39].price,
      icon: images[3],
    },
    {
      id: jsonData[41].id,
      name: jsonData[41].name,
      link: jsonData[41].link,
      price: jsonData[41].price,
      icon: images[4],
    },
    {
      id: jsonData[38].id,
      name: jsonData[38].name,
      link: jsonData[38].link,
      price: jsonData[38].price,
      icon: images[2],
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

          <div className={styles.descContainer}>
            <h2>Vampire BloodLines: 2</h2>
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
            <h2>Dead Space</h2>
            <p>{gamesContent[0].price}$</p>
          </div>
        </a>

        <a href={`${gamesContent[2].link}`} className={styles.itemIcon3}>
          <img
            src={gamesContent[2].icon}
            className={styles.itemIcon}
            alt={`${gamesContent[2].name} icon`}
            aria-label={`${gamesContent[2].name} icon`}
            loading="lazy"
            onClick={() => dispatch(setContentID(gamesContent[2].id))}
            role="button"
            tabIndex={0}
          ></img>

          <div className={styles.descContainerSmall}>
            <h2>Residen Evil 4</h2>
            <p>{gamesContent[0].price}$</p>
          </div>
        </a>

        <a href={`${gamesContent[3].link}`} className={styles.itemIcon4}>
          <img
            src={gamesContent[3].icon}
            className={styles.itemIcon}
            alt={`${gamesContent[3].name} icon`}
            aria-label={`${gamesContent[3].name} icon`}
            loading="lazy"
            onClick={() => dispatch(setContentID(gamesContent[3].id))}
            role="button"
            tabIndex={0}
          ></img>

          <div className={styles.descContainer}>
            <h2>Atomic Heart</h2>
            <p>{gamesContent[0].price}$</p>
          </div>
        </a>
      </div>
    </>
  );
}

const BestOfTheYearMemo = memo(BestOfTheYear);

export default BestOfTheYearMemo;
