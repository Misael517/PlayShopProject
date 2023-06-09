import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import useGetImages from '../../Hooks/useGettImages';
import styles from './NewReleases.module.css';
import jsonData from '../../assets/gamesInfo.json';
import usePreloadImages from '../../Hooks/usePreloadImage';

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

    const { data: images, isLoading, isError } = useGetImages('newReleases', '/images/newReleases')

    // Preload the images
    usePreloadImages(images)

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>Error</h2>;
    }


    const gamesContent: GameContent[] = [
        { id: 0, logo: images[0], description: 'Embark on an epic and heartfelt journey as Kratos and Atreus.', link: jsonData[13].link, image: images[6], icon: images[12], price: jsonData[13].actualPrice },
        { id: 1, logo: images[4], description: 'One of the most acclaimed RPGs of all time Now ready for a new generation.', link: jsonData[12].link, image: images[7], icon: images[13], price: jsonData[12].actualPrice },
        { id: 2, logo: images[5], description: 'Explore the vast land and skies of Hyrule.', link: jsonData[42].link, image: images[8], icon: images[14], price: jsonData[42].price },
        { id: 3, logo: images[2], description: 'Untangle the past as Kena, in search of the sacred Mountain Shrine.', link: jsonData[15].link, image: images[9], icon: images[15], price: jsonData[15].actualPrice },
        { id: 4, logo: images[3], description: 'Ally with survivors against the creatures threatening to bleed the town dry.', link: jsonData[43].link, image: images[10], icon: images[16], price: jsonData[43].price },
        { id: 5, logo: images[1], description: 'Become a Jedi and Stand Against the Darkness.', link: jsonData[40].link, image: images[11], icon: images[17], price: jsonData[40].price },
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