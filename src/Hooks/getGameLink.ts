import jsonData from "../assets/gamesInfo.json";

const currentGame = jsonData.find((game) =>
  window.location.href.includes(game.link)
);

if (currentGame) {
  const getID = currentGame.id - 1;

  const currentID = String(getID);

  sessionStorage.setItem("currentContent", currentID);
}

// Get the number of the current game that is going to be displayed
const currentIndex = Number(sessionStorage.getItem("currentContent"));

// Save the value from the session storage
const actualGame = jsonData[currentIndex];

// Save the current game LINK
export const gameLink = actualGame.link;
