import type { RootState } from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handleNext, handleBack } from '../../app/Slices/CoomingSoonSlice';
import { memo } from 'react';
import { getImages } from '../../api/getImages';
import { useQuery } from '@tanstack/react-query';
import styles from './Styles/GamesDisplay.module.css';
import jsonData from '../../assets/gamesInfo.json';


// Interfaces:
interface Games {
    id: number,
    name: string;
    icon: string;
    link?: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
}

interface GamesCooming {
    id: number,
    games: Games[],
}


const gamesCooming: GamesCooming[] = [
    {
        id: 0,
        games: [
            {
                id: 24,
                name: jsonData[24].name,
                icon: jsonData[24].icon,
                link: jsonData[24].link,
                isOnSale: jsonData[24].isOnSale,
                price: jsonData[24].price,
                coomingSoon: jsonData[24].coomingSoon,
                discount: jsonData[24].discount,
                actualPrice: jsonData[24].actualPrice,
            },
            {
                id: 25,
                name: jsonData[25].name,
                icon: jsonData[25].icon,
                link: jsonData[25].link,
                isOnSale: jsonData[25].isOnSale,
                price: jsonData[25].price,
                coomingSoon: jsonData[25].coomingSoon,
                discount: jsonData[25].discount,
                actualPrice: jsonData[25].actualPrice,
            },
            {
                id: 26,
                name: jsonData[26].name,
                icon: jsonData[26].icon,
                link: jsonData[26].link,
                isOnSale: jsonData[26].isOnSale,
                price: jsonData[26].price,
                coomingSoon: jsonData[26].coomingSoon,
                discount: jsonData[26].discount,
                actualPrice: jsonData[26].actualPrice,
            },
            {
                id: 27,
                name: jsonData[27].name,
                icon: jsonData[27].icon,
                link: jsonData[27].link,
                isOnSale: jsonData[27].isOnSale,
                price: jsonData[27].price,
                coomingSoon: jsonData[27].coomingSoon,
                discount: jsonData[27].discount,
                actualPrice: jsonData[27].actualPrice,
            },
            {
                id: 28,
                name: jsonData[28].name,
                icon: jsonData[28].icon,
                link: jsonData[28].link,
                isOnSale: jsonData[28].isOnSale,
                price: jsonData[28].price,
                coomingSoon: jsonData[28].coomingSoon,
                discount: jsonData[28].discount,
                actualPrice: jsonData[28].actualPrice,
            },
            {
                id: 29,
                name: jsonData[29].name,
                icon: jsonData[29].icon,
                link: jsonData[29].link,
                isOnSale: jsonData[29].isOnSale,
                price: jsonData[29].price,
                coomingSoon: jsonData[29].coomingSoon,
                discount: jsonData[29].discount,
                actualPrice: jsonData[29].actualPrice,
            },
        ]
    },
    {
        id: 1,
        games: [
            {
                id: 30,
                name: jsonData[30].name,
                icon: jsonData[30].icon,
                link: jsonData[30].link,
                isOnSale: jsonData[30].isOnSale,
                price: jsonData[30].price,
                coomingSoon: jsonData[30].coomingSoon,
                discount: jsonData[30].discount,
                actualPrice: jsonData[30].actualPrice,
            },
            {
                id: 31,
                name: jsonData[31].name,
                icon: jsonData[31].icon,
                link: jsonData[31].link,
                isOnSale: jsonData[31].isOnSale,
                price: jsonData[31].price,
                coomingSoon: jsonData[31].coomingSoon,
                discount: jsonData[31].discount,
                actualPrice: jsonData[31].actualPrice,
            },
            {
                id: 32,
                name: jsonData[32].name,
                icon: jsonData[32].icon,
                link: jsonData[32].link,
                isOnSale: jsonData[32].isOnSale,
                price: jsonData[32].price,
                coomingSoon: jsonData[32].coomingSoon,
                discount: jsonData[32].discount,
                actualPrice: jsonData[32].actualPrice,
            },
            {
                id: 33,
                name: jsonData[33].name,
                icon: jsonData[33].icon,
                link: jsonData[33].link,
                isOnSale: jsonData[33].isOnSale,
                price: jsonData[33].price,
                coomingSoon: jsonData[33].coomingSoon,
                discount: jsonData[33].discount,
                actualPrice: jsonData[33].actualPrice,
            },
            {
                id: 34,
                name: jsonData[34].name,
                icon: jsonData[34].icon,
                link: jsonData[34].link,
                isOnSale: jsonData[34].isOnSale,
                price: jsonData[34].price,
                coomingSoon: jsonData[34].coomingSoon,
                discount: jsonData[34].discount,
                actualPrice: jsonData[34].actualPrice,
            },
            {
                id: 35,
                name: jsonData[35].name,
                icon: jsonData[35].icon,
                link: jsonData[35].link,
                isOnSale: jsonData[35].isOnSale,
                price: jsonData[35].price,
                coomingSoon: jsonData[35].coomingSoon,
                discount: jsonData[35].discount,
                actualPrice: jsonData[35].actualPrice,
            },
        ]
    },
]


function CoomingSoon() {
    const switchGames = useSelector((state: RootState) => state.switchGamesCoomingSoon.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // fetch the images from the storage
    const { data: images, isLoading, isError } = useQuery(['iconsBtn'], async () => {
        return getImages('/')
    });

    if (isLoading) {
        return <h2>Loading...</h2>;
    }

    if (isError) {
        return <h2>Error</h2>;
    }


    return (
        <>
            <h2 className={styles.sectionName}>Coming Soon</h2>

            <div className={styles.sectionBtn} onClick={() => dispatch(handleBack())}><img src={`${images[0]}`} className={styles.btnImgLeft} alt='Left arrow' /></div>

            {gamesCooming[switchGames].games.map((games) => (
                <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.icon})` }} key={games.id} onClick={() => navigate(`${games.link}`)}>
                    <div className={styles.gamesInfo}>
                        <h3>{games.name}</h3>
                        <div className={styles.gamesPrice}>
                            <p><span className={games.isOnSale ? styles.discountColor : ''}>{games.isOnSale ? `-${games.discount}%` : ''}</span></p>
                            <p><span className={games.isOnSale ? styles.strikeThrough : ''}>{games.isOnSale ? `${games.price}%` : ''}</span></p>
                            <p style={{ textAlign: 'center' }}>{games.isOnSale ? `$${games.actualPrice}` : (games.coomingSoon ? '...' : `$${games.price}`)}</p>
                        </div>
                    </div>
                </div>))}
            <div className={styles.sectionBtn} onClick={() => dispatch(handleNext())}><img src={`${images[1]}`} className={styles.btnImgRight} alt='Right Arrow' /></div>
        </>
    )
}

const CoomingSoonMemo = memo(CoomingSoon)

export default CoomingSoonMemo

