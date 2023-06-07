import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { auth } from '../../config/firebase'
import styles from './Navbar.module.css';
import logo from '/images/nav/logo.png';
import cartIcon from '/images/nav/cart.png';
import profilePic from '/images/nav/profile1.png';
import jsonData from '../../assets/gamesInfo.json'

interface Games {
    id: number,
    name: string;
    icon: string;
    searchIcon: string;
    Platforms: string,
    Publisher: string,
    Genre: string,
    link?: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
    itemAmount: number;
    cartPrice: number;
}

function Navbar() {
    const myCart = useSelector((state: RootState) => state.cart)
    const [currentItem, setCurrentItem] = useState<string>('')
    const [display, setDisplay] = useState<string>('none')
    const componentRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    // Get the items from the array in the local storage
    const test = localStorage.getItem('cartAmount')
    let currentAmount = 0

    if (test !== null) {
        currentAmount = JSON.parse(test);
    }

    // Display the search bar each tiem it finds letters
    const handleSearch = (e: string) => {
        setDisplay('flex')
        setCurrentItem(e)
    }


    // Close the bar when you click outside
    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setDisplay('none');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    })



    return (
        <>
            {/* Nav bar */}
            < nav className={styles.navbar} >

                {/* Header logo */}
                <div className={styles.navContainer}>
                    <img src={logo} className={styles.logo} onClick={() => navigate("/")} alt="PayShop Logo" />

                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/Discover`}>Discover</Link>
                        </li>
                    </ul>
                </div>


                {/* Search Funcionality */}
                <div className={styles.searchContainer} ref={componentRef}>
                    <div className={styles.inputContainer}>
                        <input type='text' className={styles.searchInput} placeholder='Search Store' onChange={(e) => handleSearch(e.target.value)} />
                    </div>

                    <div className={styles.gamesContainer} style={{ display: `${display}` }}>
                        {jsonData.filter((game) => {
                            if (currentItem === '') {
                                return game.name;
                            } else if (game.name.toLocaleLowerCase().includes(currentItem.toLocaleLowerCase())) {
                                return game.name;
                            }

                        }
                        ).splice(0, 5).map((games: Games) => (
                            <div className={styles.itemFrame} key={games.id} onClick={() => navigate(`${games.link ? games.link : ''}`)}>

                                <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.searchIcon})` }}></div>

                                <div className={styles.gamesInfo}>
                                    <h3>{games.name}</h3>
                                </div>
                            </div>))}
                    </div>
                </div>

                {/* Profile info */}
                <div className={styles.profileFrame}>

                    <div className={styles.cartContainer}>
                        <p style={{ fontSize: '1vh' }}>{currentAmount}</p>
                        <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} alt="Cart Icon" />
                    </div>

                    <img src={profilePic} className={styles.profilePic} alt="Profile Picture" />
                    <p className={styles.profileName} ><Link to={'/SignIn'}>{auth.currentUser ? 'DemoAccount' : 'sing in'}</Link></p>
                </div>
            </nav >
        </>
    )
}

export default Navbar