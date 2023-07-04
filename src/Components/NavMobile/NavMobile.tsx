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
    const mobileNavRef = useRef<HTMLLIElement>(null)
    const [displayMobile, setDisplayMobile] = useState('none');
    const [showSignIn, setShowSignIn] = useState('');
    const [userSettings, setUserSettings] = useState('');
    const navigate = useNavigate();


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
            <nav className={styles.navResponsive}>

                {/*Logo Mobile*/}
                <img src={logo} className={styles.logo} onClick={() => navigate("/")} alt="PlayShop Logo" />


                <div className={styles.navFrame} style={{ display: displayMobile }}>
                    <ul className={styles.linksContainer}>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/Discover`}>Discover</Link>
                        </li>
                        <li className={styles.userFrame} ref={mobileNavRef} style={{ display: displayMobile }}>
                            <div className={styles.cartContainer}>
                                <Link to={`/Cart`}>Cart</Link>

                                <div className={styles.cartAmount}>
                                    <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} alt="Cart Icon" />
                                    <p style={{ fontSize: 'calc(2vw + .2rem)' }}>{currentAmount}</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <div className={styles.sessionFrame}>
                        <div className={styles.profileContainer}>
                            <div className={styles.profilePic} style={{ display: userSettings, backgroundImage: `url(${profilePic})` }}></div>
                            <a className={styles.signOutBtn} style={{ display: userSettings }} onClick={() => handleSignOut()}>sign out</a>
                            <a className={styles.signInBtn} style={{ display: showSignIn }} href="'/SignIn'">Sign In</a>
                        </div>
                    </div>
                </div>


                <SearchBar />



                <img src={navMobile}
                    alt="navbar"
                    className={styles.navIcon} onClick={() => displayMobile === 'flex' ? setDisplayMobile('none') : setDisplayMobile('flex')}
                />

            </nav>

        </>
    )
}

export default NavMobile