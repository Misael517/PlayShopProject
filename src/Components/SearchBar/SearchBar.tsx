import styles from './SearchBar.module.css';

// game icons:
import icon1 from '../../assets/Images/icon1.jpg';
import icon2 from '../../assets/Images/icon2.jpg';
import icon3 from '../../assets/Images/icon3.jpg';
import icon4 from '../../assets/Images/icon4.jpg';
import icon5 from '../../assets/Images/icon5.jpg';
import icon6 from '../../assets/Images/icon6.jpg';
import icon7 from '../../assets/Images/icon7.jpg';
import icon8 from '../../assets/Images/icon8.jpg';
import icon9 from '../../assets/Images/icon9.jpg';
import icon10 from '../../assets/Images/icon10.jpg';
import icon11 from '../../assets/Images/icon11.jpg';
import icon12 from '../../assets/Images/icon12.jpg';
import icon13 from '../../assets/Images/icon13.jpg';
import icon14 from '../../assets/Images/icon14.jpg';
import icon15 from '../../assets/Images/icon15.jpg';
import icon16 from '../../assets/Images/icon16.jpg';
import icon17 from '../../assets/Images/icon17.jpg';
import icon18 from '../../assets/Images/icon18.jpg';
import icon19 from '../../assets/Images/icon19.jpg';
import icon20 from '../../assets/Images/icon20.jpg';
import icon21 from '../../assets/Images/icon21.jpg';
import icon22 from '../../assets/Images/icon22.jpg';
import icon23 from '../../assets/Images/icon23.jpg';
import icon24 from '../../assets/Images/icon24.jpg';
import icon25 from '../../assets/Images/icon25.jpg';
import icon26 from '../../assets/Images/icon26.jpg';
import icon27 from '../../assets/Images/icon27.jpg';
import icon28 from '../../assets/Images/icon28.jpg';
import icon29 from '../../assets/Images/icon29.jpg';
import icon30 from '../../assets/Images/icon30.jpg';
import icon31 from '../../assets/Images/icon31.jpg';
import icon32 from '../../assets/Images/icon32.jpg';
import icon33 from '../../assets/Images/icon33.jpg';
import icon34 from '../../assets/Images/icon34.jpg';
import icon35 from '../../assets/Images/icon35.jpg';
import icon36 from '../../assets/Images/icon36.jpg';
import icon37 from '../../assets/Images/icon37.jpg';
import icon38 from '../../assets/Images/icon38.jpg';
import icon39 from '../../assets/Images/icon39.jpg';
import icon40 from '../../assets/Images/icon40.jpg';
import icon41 from '../../assets/Images/icon41.jpg';
import icon42 from '../../assets/Images/icon42.jpg';
import icon43 from '../../assets/Images/icon43.jpg';
import icon44 from '../../assets/Images/icon44.jpg';

interface GamesFilter {
    id: number,
    name: string;
    icon: string;
    price: number;
}

const gamesFilter: GamesFilter[] = [
    {
        id: 0,
        name: 'Grand Theft auto',
        icon: icon1,
        price: 60,
    },
    {
        id: 1,
        name: 'Elden Ring',
        icon: icon2,
        price: 60,
    },
    {
        id: 2,
        name: 'Stray',
        icon: icon3,
        price: 60,
    },
    {
        id: 3,
        name: 'Horizon Forbidden West',
        icon: icon4,
        price: 60,
    },
    {
        id: 4,
        name: 'A Plague Tale Requiem',
        icon: icon5,
        price: 60,
    },
    {
        id: 5,
        name: 'The Calisto Protocol',
        icon: icon6,
        price: 60,
    },
    {
        id: 6,
        name: 'Need For Speed Unbound',
        icon: icon7,
        price: 60,
    },
    {
        id: 7,
        name: 'Gothan Knights',
        icon: icon8,
        price: 60,
    },
    {
        id: 8,
        name: 'High On Life',
        icon: icon9,
        price: 60,
    },
    {
        id: 9,
        name: 'Sonic Frontiers',
        icon: icon10,
        price: 60,
    },
    {
        id: 10,
        name: 'Kirby and the forgotten land',
        icon: icon11,
        price: 60,
    },
    {
        id: 11,
        name: 'Dying Light 2',
        icon: icon12,
        price: 60,
    },
    {
        id: 12,
        name: 'The Witcher 3',
        icon: icon13,
        price: 60,
    },
    {
        id: 13,
        name: 'God of war Ragnarok',
        icon: icon14,
        price: 60,
    },
    {
        id: 14,
        name: 'Cyberpunk 2077',
        icon: icon15,
        price: 60,
    },
    {
        id: 15,
        name: 'Kena Bridge Of Spirits',
        icon: icon16,
        price: 60,
    },
    {
        id: 16,
        name: 'Assetto Corsa Competizione',
        icon: icon17,
        price: 60,
    },
    {
        id: 17,
        name: 'Forza Horizon 5',
        icon: icon18,
        price: 60,
    },
    {
        id: 18,
        name: 'Destiny 2',
        icon: icon19,
        price: 60,
    },
    {
        id: 19,
        name: 'Doom Ethernal',
        icon: icon20,
        price: 60,
    },
    {
        id: 20,
        name: 'Horizon Zero Dawn',
        icon: icon21,
        price: 60,
    },
    {
        id: 21,
        name: 'Assassins Creed Valhalla',
        icon: icon22,
        price: 60,
    },
    {
        id: 22,
        name: 'Jedi Fallen Order',
        icon: icon23,
        price: 60,
    },
    {
        id: 23,
        name: 'Mortal Kombat X',
        icon: icon24,
        price: 60,
    },
    {
        id: 24,
        name: 'Stalker 2',
        icon: icon25,
        price: 60,
    },
    {
        id: 25,
        name: 'Black Myth: Wukong',
        icon: icon26,
        price: 60,
    },
    {
        id: 26,
        name: 'Suicide Squad',
        icon: icon27,
        price: 60,
    },
    {
        id: 27,
        name: 'Rise Of The Ronin',
        icon: icon28,
        price: 60,
    },
    {
        id: 28,
        name: 'Forza Motosport',
        icon: icon29,
        price: 60,
    },
    {
        id: 29,
        name: 'Starfield',
        icon: icon30,
        price: 60,
    },
    {
        id: 30,
        name: 'The Day Before',
        icon: icon31,
        price: 60,
    },
    {
        id: 31,
        name: 'Robocop Rogue City',
        icon: icon32,
        price: 60,
    },
    {
        id: 32,
        name: 'Lies Of P',
        icon: icon33,
        price: 60,
    },
    {
        id: 33,
        name: 'Inmortals Of Aveum',
        icon: icon34,
        price: 60,
    },
    {
        id: 34,
        name: 'Final Fantasy XVI',
        icon: icon35,
        price: 60,
    },
    {
        id: 35,
        name: 'Pikmin 4',
        icon: icon36,
        price: 60,
    },
    {
        id: 36,
        name: 'BloodLines 2',
        icon: icon37,
        price: 60,
    },
    {
        id: 37,
        name: 'Hogwarts Legacy',
        icon: icon38,
        price: 60,
    },
    {
        id: 38,
        name: 'Atomic Heart',
        icon: icon39,
        price: 60,
    },
    {
        id: 39,
        name: 'Dead Space Remake',
        icon: icon40,
        price: 60,
    },
    {
        id: 40,
        name: 'Jedi Survivor',
        icon: icon41,
        price: 60,
    },
    {
        id: 41,
        name: 'Resident Evil 4 Remake',
        icon: icon42,
        price: 60,
    },
    {
        id: 42,
        name: 'Resident Evil 4 Remake',
        icon: icon43,
        price: 60,
    },
    {
        id: 44,
        name: 'Resident Evil 4 Remake',
        icon: icon44,
        price: 60,
    },
]

function SearchBar() {
    return (
        <>

            <h1 className={styles.pageTitle}>List of Video Games</h1>

            <div className={styles.searchContainer}>
                <input type='text' className={styles.searchInput}></input>
                <button className={styles.searchBtn}>Search</button>
            </div>

            <div className={styles.gamesContainer}>
                {gamesFilter.map((games) => (
                    <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.icon})` }} key={games.id}>


                        <div className={styles.gamesInfo}>
                            <h3>{games.name}</h3>
                            <div className={styles.gamesPrice}>
                                <p>${games.price}</p>
                            </div>
                        </div>
                    </div>))}
            </div>

        </>
    )
}

export default SearchBar