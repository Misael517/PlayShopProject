import styles from './Navbar.module.css';
import logo from './images/logo.png';
import cartIcon from './images/cart.png';
import profilePic from './images/profile1.png';
import { Link } from "react-router-dom";


function Navbar() {
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
                        <Link to={`/discover`}>Discover</Link>
                    </li>
                </ul>
            </nav >

            <div className={styles.profileFrame}>
                <img src={cartIcon} className={styles.cart} />
                <img src={profilePic} className={styles.profilePic} />
                <p className={styles.profileName}>UserName</p>
            </div>
        </>
    )
}

export default Navbar