import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { auth } from '../../config/firebase';
import { memo } from 'react';
import styles from './Navbar.module.css';
import logo from '/images/nav/logo.png';
import cartIcon from '/images/nav/cart.png';
import profilePic from '/images/nav/profile1.png';
import jsonData from '../../assets/gamesInfo.json';
import navMobile from '/navIcon.png';

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
    useSelector((state: RootState) => state.cart)
    const [currentItem, setCurrentItem] = useState<string>('')
    const [display, setDisplay] = useState<string>('none')
    const [showSingOut, setShowSingOut] = useState<string>('')
    const [userStatus, setUserStatus] = useState('sing in');
    const componentRef = useRef<HTMLDivElement>(null)
    const sessionRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    // Check if the userDemo name is stored in local storage
    useEffect(() => {
        const storedName = localStorage.getItem('userDemoName');
        if (storedName) {
            setUserStatus(storedName);
        }
    }, []);

    // Sign Out function
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            localStorage.setItem('userDemoName', 'sing in');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };



    // Get the items from the array in the local storage
    const test = localStorage.getItem('cartAmount')
    let currentAmount = 0

    if (test !== null) {
        currentAmount = JSON.parse(test);
    }

    // Display the search bar each tiem it finds letters
    const handleSearch = (e: string) => {
        setDisplay('flex')
        const content = e
        setCurrentItem(content)
    }


    // Close the bar when you click outside
    const handleClickOutside = (event: MouseEvent) => {
        if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
            setDisplay('none');
        }

        if (sessionRef.current && !sessionRef.current.contains(event.target as Node)) {
            setShowSingOut('none')
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
                    <img src={logo} className={styles.logo} onClick={() => navigate("/")} alt="PlayShop Logo" />

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

                <div className={styles.navMobileContainer}>
                    <img src={navMobile} alt="navbar" className={styles.navIcon} />
                </div>

                {/* Profile info */}
                <div className={styles.profileFrame} ref={sessionRef}>
                    <img src={profilePic} className={styles.profilePic} alt="Profile Picture" />

                    <div className={styles.sessionFrame}>
                        <p className={styles.profileName} onClick={() => auth.currentUser ? setShowSingOut('flex') : navigate('/SingIn')}>{userStatus}</p>
                        <div className={styles.singOutContainer} style={{ display: showSingOut }}>
                            <p className={styles.singOutBtn} onClick={() => handleSignOut()}>sing out</p>
                        </div>
                    </div>

                    <div className={styles.cartContainer}>
                        <p style={{ fontSize: '1vh' }}>{currentAmount}</p>
                        <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} alt="Cart Icon" />
                    </div>
                </div>
            </nav >
        </>
    )
}

const NavBarMemo = memo(Navbar)

export default NavBarMemo