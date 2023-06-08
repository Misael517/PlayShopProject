import styles from './BestOfTheYear.module.css';
import { useNavigate } from 'react-router-dom';
import jsonData from '../../assets/gamesInfo.json';
import React, { memo } from 'react';

// game icons:
import icon1 from '/images/bestOfTheYear/icon1.jpg';
import icon2 from '/images/bestOfTheYear/icon2.jpg';
import icon3 from '/images/bestOfTheYear/icon3.jpg';
import icon4 from '/images/bestOfTheYear/icon4.jpg';
import icon5 from '/images/bestOfTheYear/icon5.jpg';
import icon6 from '/images/bestOfTheYear/icon6.jpg';

interface GameContent {
    id: number;
    link?: string;
    icon: string;
}

const gamesContent: GameContent[] = [
    { id: 0, link: jsonData[36].link, icon: icon1, },
    { id: 1, link: jsonData[37].link, icon: icon2, },
    { id: 2, link: jsonData[38].link, icon: icon3, },
    { id: 3, link: jsonData[39].link, icon: icon4, },
    { id: 4, link: jsonData[41].link, icon: icon5, },
    { id: 5, link: jsonData[40].link, icon: icon6, },
]

function BestOfTheYear() {
    const navigate = useNavigate()


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