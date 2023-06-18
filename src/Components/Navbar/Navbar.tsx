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
import profilePic from '/images/nav/profile1.png';
import NavMobile from "../NavMobile/NavMobile";


function Navbar() {
    useSelector((state: RootState) => state.cart)
    const [showSingOut, setShowSingOut] = useState<string>('');
    const [userStatus, setUserStatus] = useState('sing in');
    const sessionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();


    // Close the sign out button when you click outside
    const handleClickOutside = (event: MouseEvent) => {
        if (sessionRef.current && !sessionRef.current.contains(event.target as Node)) {
            setShowSingOut('none');
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
            {/* Nav bar */}
            < nav className={styles.navbar}>

                {/* Header logo desktop*/}
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

                {/* Search bar */}
                <SearchBar />

                {/* Profile info desktop*/}
                <div className={styles.profileFrame} >
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

            <NavMobile />
        </>
    )
}

const NavBarMemo = memo(Navbar)

export default NavBarMemo