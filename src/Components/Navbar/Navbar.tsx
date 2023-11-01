import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { auth } from '../../config/firebase';
import { memo } from 'react';
import styles from './Navbar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import logo from '/images/nav/logo.png';
import cartIcon from '/images/nav/cart.png';
import profilePic from '/images/nav/profile.jpg';
import NavMobile from "../NavMobile/NavMobile";


function Navbar() {
    useSelector((state: RootState) => state.cart)
    const [showSignOut, setShowSignOut] = useState<string>('');
    const [showSignIn, setShowSignIn] = useState('');
    const [userSettings, setUserSettings] = useState('');
    const sessionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();


    // Close the sign out button when you click outside
    const handleClickOutside = (event: MouseEvent) => {
        if (sessionRef.current && showSignOut === 'flex' && !sessionRef.current.contains(event.target as Node)) {
            setShowSignOut('none');
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
            {/* Nav bar */}
            < nav className={styles.navbar}>

                <div className={styles.navFrame}>
                    <a href="/" tabIndex={0} aria-label="Playshop logo" role="link">
                        <img src={logo} className={styles.logo} alt="PlayShop logo" />
                    </a>

                    {/* Header logo desktop*/}
                    <ul className={styles.linksContainer}>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/Discover`}>Discover</Link>
                        </li>
                    </ul>
                </div>

                {/* Search bar */}
                <SearchBar />

                {/* Profile info desktop*/}
                <div className={styles.userFrame} >
                    <div className={styles.cartContainer}>
                        <p style={{ fontSize: 'calc(0.5vw + .2rem)' }}>{currentAmount}</p>
                        <img
                            src={cartIcon}
                            className={styles.cart}
                            onClick={() => navigate('/Cart')}
                            alt="Cart Icon"
                            tabIndex={0}
                            role="button"
                            aria-label="Go to Cart"
                        />
                    </div>

                    <div className={styles.sessionFrame} ref={sessionRef}>
                        <a
                            className={styles.signInBtn}
                            style={{ display: showSignIn }}
                            href='/SignIn'
                            tabIndex={0}
                        >
                            Sign In
                        </a>
                        <div
                            className={styles.profilePic}
                            style={{ display: userSettings, backgroundImage: `url(${profilePic})` }}
                            onClick={() => showSignOut === 'none' ? setShowSignOut('flex') : setShowSignOut('none')}
                            role="button"
                            aria-label="Show sign out button"
                        >
                        </div>

                        <div className={styles.signOutContainer} style={{ display: showSignOut }}>
                            <button className={styles.signOutBtn} onClick={() => handleSignOut()} tabIndex={0}>sign out</button>
                        </div>
                    </div>
                </div>
            </nav >

            <NavMobile />
        </>
    )
}

const NavBarMemo = memo(Navbar)

export default NavBarMemo