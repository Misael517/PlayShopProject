import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { setContentID } from '../../app/Slices/GamesPageSlice';
import styles from './BestOfTheYear.module.css';
import useGetImages from '../../Hooks/useGetImages';
import jsonData from '../../assets/gamesInfo.json';


interface GameContent {
    id: number;
    name: string;
    link?: string;
    icon: string;
}


function BestOfTheYear() {
    const dispatch = useDispatch()
    const { data: images, isLoading, isError } = useGetImages('bestOfTheYear', '/images/bestOfTheYear/', 'icon', '.webp', 6)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>Error</h2>
    }


    // Create an array of images
    const gamesContent: GameContent[] = [
        { id: jsonData[36].id, name: jsonData[36].name, link: jsonData[36].link, icon: images[0], },
        { id: jsonData[37].id, name: jsonData[37].name, link: jsonData[37].link, icon: images[1], },
        { id: jsonData[38].id, name: jsonData[38].name, link: jsonData[38].link, icon: images[2], },
        { id: jsonData[39].id, name: jsonData[39].name, link: jsonData[39].link, icon: images[3], },
        { id: jsonData[41].id, name: jsonData[41].name, link: jsonData[41].link, icon: images[4], },
        { id: jsonData[40].id, name: jsonData[40].name, link: jsonData[40].link, icon: images[5], },
    ]


    return (
        <>
            <h2 className={styles.sectionName}>Best of the year</h2>

            <div className={styles.itemsContainer}>
                {gamesContent.map((game) => (

                    <a href={`${game.link}`} key={game.id}>
                        <img
                            src={game.icon}
                            className={styles.itemIcon}
                            key={game.id}
                            alt={`${game.name} icon`}
                            aria-label={`${game.name} icon`}
                            loading='lazy'
                            onClick={() => dispatch(setContentID(game.id))}
                            role='button'
                            tabIndex={0}
                        >
                        </img>
                    </a>
                ))}
            </div>
        </>
    )
}

const BestOfTheYearMemo = memo(BestOfTheYear)

export default BestOfTheYearMemo