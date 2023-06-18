import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { auth } from '../../config/firebase';
import SearchBar from "../SearchBar/SearchBar";
import logo from '/images/nav/logo.png';
import cartIcon from '/images/nav/cart.png';
import profilePic from '/images/nav/profile1.png';
import navMobile from '/navIcon.png';
import signOutIcon from '/images/nav/signout.png'
import styles from './NavMobile.module.css'

function NavMobile() {
    useSelector((state: RootState) => state.cart)
    const [showSingOut, setShowSingOut] = useState<string>('');
    const [userStatus, setUserStatus] = useState('sing in');
    const [displayMobile, setDisplayMobile] = useState('none');
    const sessionRef = useRef<HTMLDivElement>(null);
    const mobileNavRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate();


    // Close the sign out button when you click outside
    const handleClickOutside = (event: MouseEvent) => {
        if (sessionRef.current && !sessionRef.current.contains(event.target as Node)) {
            setShowSingOut('none');
        }

        if (mobileNavRef.current && !mobileNavRef.current.contains(event.target as Node) && !(event.target as HTMLElement).classList.contains(styles.navIcon)) {
            setDisplayMobile('none');
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


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
            localStorage.setItem('userDemoName', 'Sing in');
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
                {/* Header logo Mobile*/}

                <div className={styles.navContainerMobile}>
                    <img src={logo} className={styles.logoMobile} onClick={() => navigate("/")} alt="PlayShop Logo" />
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`/Discover`}>Discover</Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.navIconContainer}>
                    <img src={navMobile} alt="navbar" className={styles.navIcon} onClick={() => displayMobile === 'flex' ? setDisplayMobile('none') : setDisplayMobile('flex')} />
                </div>

                <div className={styles.profileFrameMobile} style={{ display: displayMobile }} ref={mobileNavRef}>
                    {/* Profile info Mobile*/}
                    <div className={styles.frameHolderMobile}>
                        <div className={styles.sessionFrameMobile}>
                            <img src={profilePic} className={styles.profilePicMobile} alt="Profile Picture" />
                            <p className={styles.profileNameMobile} onClick={() => auth.currentUser ? setShowSingOut('flex') : navigate('/SingIn')}>{userStatus}</p>
                        </div>

                        <div className={styles.singOutContainerMobile} style={{ display: showSingOut }} ref={sessionRef}>
                            <p className={styles.singOutBtnMobile} onClick={() => handleSignOut()}>Sing Out</p>
                            <img src={signOutIcon} className={styles.signOutIcon} alt="Sign Out Icon" onClick={() => handleSignOut()} />
                        </div>

                        <div className={styles.cartContainerMobile}>
                            <p style={{ fontSize: '1.07rem', fontWeight: '100' }} onClick={() => navigate('/Cart')}>Your Cart</p>
                            <p style={{ fontSize: '0.8rem' }}>{currentAmount}</p>
                            <img src={cartIcon} className={styles.cartMobile} alt="Cart Icon" />
                        </div>

                        <SearchBar />
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavMobile