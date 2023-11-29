import styles from "./ReviewsFeed.module.css";
import { memo } from "react";
import { useQuery } from "@tanstack/react-query";

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

interface platforms {
  platform: {
    id: number;
    name: string;
  };
}

interface genres {
  id: number;
  name: string;
}

interface score {
  metascore: number;
  platform: {
    name: string;
  };
}

function ReviewsFeed({ currentGame }: Game) {
  const getGamesInfo = `https://api.rawg.io/api/games/${currentGame.apiSlug}?key=cf132742c746463da1769589de43d833`;

  const { data: gamesData } = useQuery({
    queryFn: () => fetch(getGamesInfo).then((response) => response.json()),
    queryKey: ["gamesData"],
  });

  const cleanDesc: string =
    gamesData?.description_raw
      .replace(/\b(About|Setting|Characters|Gameplay|###)\b/g, "")
      .replace("###", "") || "";

  const firstLine: string[] = cleanDesc.split(/[\n,!]/);

  const paragraphs: string[] = cleanDesc.split(/[\n,™]/);

  function fixDescription() {
    if (gamesData === undefined) {
      paragraphs.push(
        "The description of this game is not available right now. This game has not been released yet."
      );
    }
  }

  fixDescription();

  return (
    <>
      <div className={styles.titleContainer}>
        <h1 className={styles.gameTitle}>
          {gamesData?.name ? gamesData?.name : currentGame.name}
        </h1>

        {firstLine
          .splice(0, firstLine.length > 2 ? 1 : 0)
          .map((text: string, index: number) => {
            return (
              <p className={styles.titleDesc} key={index}>
                {text.length > 0 ? text : " "}
              </p>
            );
          })}
      </div>

      <div className={styles.videoContainer}>
        <iframe
          src={`https://www.youtube.com/embed/${currentGame?.trailer}?si=xJye04plUOWSRhTl`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className={styles.gamesTrailer}
        ></iframe>

        <p className={styles.gameDescription}>
          {paragraphs.length > 1 && firstLine.length > 2
            ? paragraphs.splice(1, currentGame.descriptionIndex)
            : paragraphs}
        </p>
      </div>

      {/* scores */}
      <div className={styles.gameExtras}>
        <div>
          <h2 className={styles.criticsTitle}>Metacritic Scores</h2>

          {/* Metascore */}
          <div className={styles.scoreContainer}>
            {gamesData?.metacritic_platforms.length > 0
              ? gamesData?.metacritic_platforms
                  .slice(0, 5)
                  .map((item: score, index: number) => {
                    return (
                      <div key={index} className={styles.scorePlatform}>
                        <div className={styles.platformItem}>
                          <span
                            className={styles.circleBorder}
                            style={{
                              backgroundColor:
                                item.metascore >= 80
                                  ? "00ce7a"
                                  : item.metascore >= 50
                                  ? "#ffbd3f"
                                  : item.metascore >= 0
                                  ? "#ff6874"
                                  : "#000",
                            }}
                          >
                            <span className={styles.circleInside}>
                              <p className={styles.score}>{item.metascore}</p>
                            </span>
                          </span>
                          {item.platform.name.length > 0 ? (
                            <p className={styles.criticsText}>
                              {item.platform.name}
                            </p>
                          ) : (
                            <span className={styles.detailsText}>
                              No Available
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })
              : gamesData?.platforms
                  .slice(0, 5)
                  .map((item: score, index: number) => {
                    return (
                      <div key={index} className={styles.scorePlatform}>
                        <div className={styles.platformItem}>
                          <span
                            className={styles.circleBorder}
                            style={{
                              backgroundColor: "#000",
                            }}
                          >
                            <span className={styles.circleInside}>
                              <p className={styles.score}>?</p>
                            </span>
                          </span>
                          {item.platform.name.length > 0 ? (
                            <p className={styles.criticsText}>
                              {item.platform.name}
                            </p>
                          ) : (
                            <span className={styles.detailsText}>
                              No Available
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
          </div>
        </div>

        {/* Game details */}
        <div className={styles.detailsContainer}>
          <div className={styles.detailsTags}>
            <div className={styles.detailsContent}>
              <h3 className={styles.detailsTitle}>Publisher</h3>
              <div className={styles.detailsDesc}>
                {gamesData?.publishers.length > 0 ? (
                  <a className={styles.detailsText} href="#">
                    {gamesData?.publishers[0].name}
                  </a>
                ) : (
                  <span className={styles.detailsText}>No Available</span>
                )}
              </div>
            </div>

            <div className={styles.detailsContent}>
              <h3 className={styles.detailsTitle}>Developers</h3>
              <div className={styles.detailsDesc}>
                {gamesData?.developers.length > 0 ? (
                  <a className={styles.detailsText} href="#">
                    {gamesData?.developers[0].name}
                  </a>
                ) : (
                  <span className={styles.detailsText}>No Available</span>
                )}
              </div>
            </div>

            <div className={styles.detailsContent}>
              <h3 className={styles.detailsTitle}>ESRB</h3>
              <div className={styles.detailsDesc}>
                {gamesData?.esrb_rating ? (
                  <a className={styles.detailsText} href="#">
                    {gamesData?.esrb_rating.name}
                  </a>
                ) : (
                  <span className={styles.detailsText}>No rated</span>
                )}
              </div>
            </div>

            <div className={styles.detailsContent}>
              <h3 className={styles.detailsTitle}>Genres</h3>
              <div className={styles.detailsDesc}>
                {gamesData?.genres.map((item: genres) => {
                  return (
                    <a className={styles.detailsText} key={item.id} href="#">
                      {item.name.length > 0 ? item.name : "No Available"}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className={styles.detailsContent}>
              <h3 className={styles.detailsTitle}>Platforms</h3>
              <div className={styles.detailsDesc}>
                {gamesData?.platforms.map((item: platforms) => {
                  return (
                    <a
                      className={styles.detailsText}
                      key={item.platform.id}
                      href="#"
                    >
                      {item.platform.name ? item.platform.name : "No Available"}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ReviewsFeedMemo = memo(ReviewsFeed);

export default ReviewsFeedMemo;
