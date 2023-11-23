import { useState } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { setContentID } from "../../app/Slices/GamesPageSlice";
import useGetImages from "../../Hooks/useGetImages";
import usePreloadImages from "../../Hooks/usePreloadImages";
import styles from "./NewReleases.module.css";
import jsonData from "../../assets/gamesInfo.json";

interface GameContent {
  id: number;
  name: string;
  index: number;
  logo: string;
  description: string;
  link?: string;
  icon: string;
  image: string;
  price: number;
}

function NewReleases() {
  const dispatch = useDispatch();
  const [currentGame, setCurrentGame] = useState<number>(0);

  const {
    data: images,
    isLoading,
    isError,
  } = useGetImages("newReleases", "/images/newReleases/", "game", ".webp", 6);
  const {
    data: logo,
    isLoading: logoIsLoading,
    isError: logoIsError,
  } = useGetImages(
    "newReleasesLogo",
    "/images/newReleases/",
    "logo",
    ".webp",
    6
  );
  const {
    data: icon,
    isLoading: iconIsLoading,
    isError: iconIsError,
  } = useGetImages(
    "newReleasesIcon",
    "/images/newReleases/",
    "icon",
    ".webp",
    6
  );

  // Preload the images
  usePreloadImages(images);
  usePreloadImages(logo);
  usePreloadImages(icon);

  if (isLoading || logoIsLoading || iconIsLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError || logoIsError || iconIsError) {
    return <h2>Error</h2>;
  }

  const gamesContent: GameContent[] = [
    {
      id: 0,
      name: jsonData[12].name,
      index: jsonData[12].id,
      logo: logo[1],
      description:
        "One of the best RPGs of all time Now ready for a new generation",
      link: jsonData[12].link,
      image: images[1],
      icon: icon[1],
      price: jsonData[12].actualPrice,
    },
    {
      id: 1,
      name: jsonData[13].name,
      logo: logo[0],
      index: jsonData[13].id,
      description:
        "Embark on an epic and heartfelt journey as Kratos and Atreus",
      link: jsonData[13].link,
      image: images[0],
      icon: icon[0],
      price: jsonData[13].actualPrice,
    },
    {
      id: 2,
      name: jsonData[42].name,
      index: jsonData[42].id,
      logo: logo[2],
      description: "Explore the vast land and skies of Hyrule playing as Link",
      link: jsonData[42].link,
      image: images[2],
      icon: icon[2],
      price: jsonData[42].price,
    },
    {
      id: 3,
      name: jsonData[15].name,
      index: jsonData[15].id,
      logo: logo[3],
      description:
        "Untangle the past as Kena, in search of the Mountain Shrine",
      link: jsonData[15].link,
      image: images[3],
      icon: icon[3],
      price: jsonData[15].actualPrice,
    },
    {
      id: 4,
      name: jsonData[6].name,
      index: jsonData[6].id,
      logo: logo[4],
      description:
        "Defeat with survivors the creatures threatening to bleed the town dry",
      link: jsonData[43].link,
      image: images[4],
      icon: icon[4],
      price: jsonData[43].price,
    },
    {
      id: 5,
      name: jsonData[3].name,
      index: jsonData[3].id,
      logo: logo[5],
      description: "Get ready to become a Jedi and Stand Against the Darkness",
      link: jsonData[3].link,
      image: images[5],
      icon: icon[5],
      price: jsonData[3].price,
    },
  ];

  return (
    <>
      {/* background image of the selected video game */}
      <div
        className={styles.itemsDisplay}
        style={{ backgroundImage: `url(${gamesContent[currentGame].image})` }}
        aria-label="Current game background image"
      >
        <img
          src={gamesContent[currentGame].logo}
          className={styles.gameLogo}
          alt="Left arrow"
          loading="lazy"
        />

        {/* description container */}
        <div className={styles.itemsFrame}>
          <h1>{gamesContent[currentGame].name}</h1>

          {/* Current Video game description */}
          <p
            className={styles.itemDesc}
            aria-label="Current video game description"
          >
            {gamesContent[currentGame].description}
          </p>

          {/* next and back button for the mobile version */}
          <div className={styles.btnMobileFrame}>
            {/* Back button */}
            <div
              onClick={() =>
                currentGame > 0 ? setCurrentGame(currentGame - 1) : ""
              }
              role="button"
              tabIndex={0}
              aria-label="Back button"
            >
              <img
                src={"/L.png"}
                className={styles.btnImgLeft}
                alt="Left arrow"
                loading="lazy"
              />
            </div>

            {/* BUY NOW button */}
            <a href={gamesContent[currentGame].link}>
              <button
                type="button"
                className={styles.buyBtn}
                onClick={() =>
                  dispatch(setContentID(gamesContent[currentGame].index))
                }
              >
                Buy Now
              </button>
            </a>

            {/* Next button */}
            <div
              onClick={() =>
                currentGame < 5 ? setCurrentGame(currentGame + 1) : ""
              }
              role="button"
              tabIndex={0}
              aria-label="Next button"
            >
              <img
                src={"/R.png"}
                className={styles.btnImgRight}
                alt="Right arrow"
                loading="lazy"
              />
            </div>
          </div>

          <div className={styles.thumbContainer}>
            {gamesContent.map((game) => (
              <div
                className={`${styles.itemsThumbnail} ${
                  currentGame === game.id ? styles.selectedGame : ""
                }`}
                key={game.id}
                onClick={() => setCurrentGame(game.id)}
                role="button"
                tabIndex={0}
                aria-label="Video game thumbnail"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video games thumbnails container*/}
      {/* <div className={styles.thumbContainer}>
        {gamesContent.map((game) => (
          <img
            className={`${styles.itemsThumbnail} ${
              currentGame === game.id ? styles.selectedGame : ""
            }`}
            key={game.id}
            style={{ backgroundImage: `url(${game.icon})` }}
            src={game.icon}
            onClick={() => setCurrentGame(game.id)}
            alt="Game tumbnail"
            role="button"
            tabIndex={0}
            aria-label="Video game thumbnail"
            loading="lazy"
          />
        ))}
      </div> */}

      <img
        src={gamesContent[currentGame].icon}
        className={styles.gameIcon}
        loading="lazy"
      />
    </>
  );
}

const NewReleasesMemo = memo(NewReleases);

export default NewReleasesMemo;
