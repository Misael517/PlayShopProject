import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import styles from './BestOfTheYear.module.css';
import useGetImages from '../../Hooks/useGetImages';
import usePreloadImages from '../../Hooks/usePreloadImages';
import jsonData from '../../assets/gamesInfo.json';


interface GameContent {
    id: number;
    link?: string;
    icon: string;
}

function BestOfTheYear() {
    const navigate = useNavigate()

    const { data: images, isLoading, isError } = useGetImages('bestOfTheYear', '/images/bestOfTheYear/', 'icon', '.webp', 6)

    // Preload Images
    usePreloadImages(images)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error</h2>
    }


    // Create an array of images
    const gamesContent: GameContent[] = [
        { id: 0, link: jsonData[36].link, icon: images[0], },
        { id: 1, link: jsonData[37].link, icon: images[1], },
        { id: 2, link: jsonData[38].link, icon: images[2], },
        { id: 3, link: jsonData[39].link, icon: images[3], },
        { id: 4, link: jsonData[41].link, icon: images[4], },
        { id: 5, link: jsonData[40].link, icon: images[5], },
    ]


    return (
        <>
            <h2 className={styles.sectionName}>Best of the year</h2>
            <div className={styles.itemsGrid}>
                {gamesContent.map((game) => (
                    <div className={styles.itemsContent} key={game.id} style={{ backgroundImage: `url(${game.icon})` }} onClick={() => navigate(`${game.link}`)}>

                    </div>
                ))}
            </div>
        </>
    )
}

const BestOfTheYearMemo = memo(BestOfTheYear)

export default BestOfTheYearMemo