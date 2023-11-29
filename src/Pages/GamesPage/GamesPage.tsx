import { memo, lazy, Suspense } from "react";
import { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import useGetImages from "../../Hooks/useGetImages";
import styles from "./GamesPage.module.css";
import jsonData from "../../assets/gamesInfo.json";

const GameContent = lazy(
  () => import("../../Components/GameContent/GameContent")
);
const Navbar = lazy(() => import("../../Components/Navbar/Navbar"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));
const ReviewsFeed = lazy(
  () => import("../../Components/ReviewFeed/ReviewsFeed")
);

interface ShowCase {
  id: number;
  thumbnail: string;
  image: string;
}

// Get the number of the current game that is going to be displayed
const currentIndex = Number(sessionStorage.getItem("currentContent"));

// Save the value from the session storage
const currentGame = jsonData[currentIndex];

function GamesPages() {
  useSelector((state: RootState) => state.gamesPages.contentID);

  const getGamesInfo = `https://api.rawg.io/api/games/${currentGame.apiSlug}?key=cf132742c746463da1769589de43d833`;

  const { data: gamesData } = useQuery({
    queryFn: () => fetch(getGamesInfo).then((response) => response.json()),
    queryKey: ["gamesData"],
  });

  // Save the images in cache
  const {
    data: img,
    isLoading: isImagesLoading,
    isError: isImagesError,
  } = useGetImages(
    `${currentGame.name}Img`,
    `/images/gamesImg${currentGame.link}/`,
    "img",
    ".webp",
    7
  );

  const {
    data: thumb,
    isLoading: isThumbLoading,
    isError: isThumbError,
  } = useGetImages(
    `${currentGame.name}Thumb`,
    `/images/gamesImg/${currentGame.link}/imageThumbnail/`,
    "thumb",
    ".webp",
    6
  );

  if (isImagesLoading || isThumbLoading) {
    return <h2>Loading...</h2>;
  }

  if (isImagesError || isThumbError) {
    return <h2>Error</h2>;
  }

  const imgArr: ShowCase[] = [
    {
      id: 0,
      thumbnail: thumb[0],
      image: img[0],
    },
    {
      id: 1,
      thumbnail: thumb[1],
      image: img[1],
    },
    {
      id: 2,
      thumbnail: thumb[2],
      image: img[2],
    },
    {
      id: 3,
      thumbnail: thumb[3],
      image: img[3],
    },
    {
      id: 4,
      thumbnail: thumb[4],
      image: img[4],
    },
    {
      id: 5,
      thumbnail: thumb[5],
      image: img[5],
    },
  ];

  return (
    <Suspense>
      <header className={styles.header}>
        <Suspense>
          <Navbar />
        </Suspense>
      </header>

      <main className={styles.main}>
        <section className={styles.section1}>
          <GameContent
            imgArr={imgArr}
            img7={img[6]}
            currentGame={currentGame}
          />
        </section>

        <section
          className={styles.section2}
          style={{
            display: gamesData?.name ? "flex" : "none",
          }}
        >
          <ReviewsFeed currentGame={currentGame} />
        </section>
      </main>

      <footer className={styles.footer}>
        <Suspense>
          <Footer />
        </Suspense>
      </footer>
    </Suspense>
  );
}

const GamesPagesMemo = memo(GamesPages);

export default GamesPagesMemo;
