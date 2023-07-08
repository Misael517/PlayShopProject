import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { auth } from '../../config/firebase';
import SearchBar from "../SearchBar/SearchBar";
import logo from '/images/nav/logo.png';
import cartIcon from '/images/nav/cart.png';
import profilePic from '/images/nav/Profile.jpg';
import navMobile from '/navIcon.png';
import styles from './NavMobile.module.css'

function NavMobile() {
    useSelector((state: RootState) => state.cart)
    useSelector((state: RootState) => state.cart)
    const [displayMobile, setDisplayMobile] = useState('none');
    const [showSignIn, setShowSignIn] = useState('');
    const [userSettings, setUserSettings] = useState('');
    const navIconRef = useRef<HTMLImageElement>(null)
    const navigate = useNavigate();



    // Close the sign out button when you click outside
    const handleClickOutside = (event: MouseEvent) => {

        if (navIconRef.current && displayMobile === 'flex' && !navIconRef.current.contains(event.target as Node)) {
            setDisplayMobile('none');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });


    // Check if the 'profileSettings' is stored in local storage
    useEffect(() => {
        const currentUser = localStorage.getItem('profileSettings');
        const storedSession = localStorage.getItem('signIn');

        if (currentUser) {
            setUserSettings(currentUser);
        }

        if (storedSession) {
            setShowSignIn(storedSession);
        }

    }, []);


    // Sign Out function
    const handleSignOut = async () => {
        try {
            await auth.signOut();
            localStorage.setItem('profileSettings', 'none');
            localStorage.setItem('signIn', 'flex');
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

    return (
        <>
            {/* nav mobile */}
            <nav className={styles.navResponsive} ref={navIconRef}>

                {/*Logo Mobile*/}
                <img src={logo}
                    className={styles.logo}
                    onClick={() => navigate("/")}
                    alt="PlayShop Logo"
                    role="link"
                    tabIndex={0}
                    aria-label="Playshop Logo"
                />

                <div className={styles.navFrame} style={{ display: displayMobile }}>
                    <ul className={styles.linksContainer}>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/Discover`}>Discover</Link>
                        </li>
                        <li className={styles.cartFrame}>
                            <div className={styles.cartContainer}>
                                <Link to={`/Cart`}>Cart</Link>

                                <div className={styles.amountDisplay}>
                                    <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} alt="Cart Icon" />
                                    <p className={styles.cartAmount}>{currentAmount}</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.sessionFrame}>
                        <div className={styles.profileContainer}>
                            <div
                                className={styles.profilePic}
                                style={{ display: userSettings, backgroundImage: `url(${profilePic})` }}
                                role="img"
                                aria-label="Profile picture">
                            </div>

                            <button
                                className={styles.signOutBtn}
                                style={{ display: userSettings }}
                                onClick={() => handleSignOut()}
                            >
                                sign out
                            </button>

                            <a
                                className={styles.signInBtn}
                                style={{ display: showSignIn }}
                                href='/SignIn'
                            >
                                Sign In
                            </a>
                        </div>
                    </div>
                </div>


                <SearchBar />



                <img
                    src={navMobile}
                    alt="navbar"
                    className={styles.navIcon}
                    onClick={() => displayMobile === 'flex' ? setDisplayMobile('none') : setDisplayMobile('flex')}
                    role="button"
                    aria-label="Navigation menu Button"
                    tabIndex={0}
                />

            </nav>

        </>
    )
}

export default NavMobile