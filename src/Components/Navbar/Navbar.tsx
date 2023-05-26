import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useSelector } from "react-redux";
import styles from './Navbar.module.css';
import logo from './images/logo.png';
import cartIcon from './images/cart.png';
import profilePic from './images/profile1.png';



function Navbar() {
    const navigate = useNavigate()
    const myCart = useSelector((state: RootState) => state.cart)

    const test = localStorage.getItem('cartAmount')
    let currentAmount = 0

    if (test !== null) {
        currentAmount = JSON.parse(test);
    }


    return (
        <>
            {/* Nav bar */}
            < nav className={styles.navbar} >
                {/* Header logo */}
                <div>
                    < img src={logo} className={styles.logo} />
                </div>


                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/Discover`}>Discover</Link>
                    </li>
                </ul>
            </nav >

            <div className={styles.profileFrame}>

                <div className={styles.cartContainer}>
                    <p style={{ fontSize: '1vh' }}>{currentAmount}</p>
                    <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} />
                </div>

                <img src={profilePic} className={styles.profilePic} onClick={() => navigate('/Profile')} />
                <p className={styles.profileName} onClick={() => navigate('/Profile')}>UserName</p>
            </div>
        </>
    )
}

export default Navbar