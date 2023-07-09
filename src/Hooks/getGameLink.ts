import jsonData from '../assets/gamesInfo.json';

// Get the number of the current game that is going to be displayed
const currentIndex = Number(sessionStorage.getItem('currentContent'))

// Save the value from the session storage
const currentGame = jsonData[currentIndex]

// Save the current game LINK
export const gameLink = currentGame.link
