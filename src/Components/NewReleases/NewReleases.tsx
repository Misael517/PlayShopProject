import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import { getImages } from '../../api/getImages';
import { useQuery } from '@tanstack/react-query';
import styles from './NewReleases.module.css';
import jsonData from '../../assets/gamesInfo.json';


// game icons:
import icon1 from '/images/newReleases/icon1.jpg';
import icon2 from '/images/newReleases/icon2.jpg';
import icon3 from '/images/newReleases/icon3.jpg';
import icon4 from '/images/newReleases/icon4.jpg';
import icon5 from '/images/newReleases/icon5.jpg';
import icon6 from '/images/newReleases/icon6.jpg';


// game logos:
import logo1 from '/images/newReleases/GodOfWarLogo.png';
import logo2 from '/images/newReleases/TheWitcherLogo.png';
import logo3 from '/images/newReleases/ZeldaLogo.png';
import logo4 from '/images/newReleases/KenaLogo.png';
import logo5 from '/images/newReleases/RedfallLogo.png';
import logo6 from '/images/newReleases/JediSurvivorLogo.png';




interface GameContent {
    id: number;
    logo: string;
    description: string;
    link?: string;
    icon: string;
    image: string;
    price: number;
}

function NewReleases() {
    const [currentGame, setCurrentGame] = useState<number>(0);
    const navigate = useNavigate()

    // fetch the images from the storage
    const { data: images, isLoading, isError } = useQuery(['newReleases'], async () => {
        return getImages('/images/newReleases')
    });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>Error</h2>;
    }

    const gamesContent: GameContent[] = [
        { id: 0, logo: logo1, description: 'Embark on an epic and heartfelt journey as Kratos and Atreus.', link: jsonData[13].link, image: images[6], icon: images[12], price: jsonData[13].actualPrice },
        { id: 1, logo: logo2, description: 'One of the most acclaimed RPGs of all time Now ready for a new generation.', link: jsonData[12].link, image: images[7], icon: images[13], price: jsonData[12].actualPrice },
        { id: 2, logo: logo3, description: 'Explore the vast land and skies of Hyrule.', link: jsonData[42].link, image: images[8], icon: images[14], price: jsonData[42].price },
        { id: 3, logo: logo4, description: 'Untangle the past as Kena, in search of the sacred Mountain Shrine.', link: jsonData[15].link, image: images[9], icon: images[15], price: jsonData[15].actualPrice },
        { id: 4, logo: logo5, description: 'Ally with survivors against the creatures threatening to bleed the town dry.', link: jsonData[43].link, image: images[10], icon: images[16], price: jsonData[43].price },
        { id: 5, logo: logo6, description: 'Become a Jedi and Stand Against the Darkness.', link: jsonData[40].link, image: images[11], icon: images[17], price: jsonData[40].price },
    ]

    return (
        <>
            <div className={styles.itemsDisplay} style={{ backgroundImage: `url(${gamesContent[currentGame].image})` }}>
                <div className={styles.itemsFrame}>
                    <img className={styles.itemslogo} src={gamesContent[currentGame].logo} alt="Game Logo" />
                    <p className={styles.itemDesc}>{gamesContent[currentGame].description}</p>
                    <p className={styles.itemPrice}>Starting at: ${gamesContent[currentGame].price}</p>
                    <button className={styles.buyBtn} onClick={() => navigate(`${gamesContent[currentGame].link}`)}>Buy</button>
                </div>
            </div>

            {gamesContent.map((game) => (
                <div className={`${styles.itemsContent} ${currentGame === game.id ? styles.selectedGame : ''}`} key={game.id} style={{ backgroundImage: `url(${game.icon})` }} onClick={() => setCurrentGame(game.id)}>

                </div>
            ))}
        </>
    )
}

const NewReleasesMemo = memo(NewReleases)

export default NewReleasesMemo