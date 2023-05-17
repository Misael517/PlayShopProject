import styles from './Navbar.module.css';
import logo from './images/logo.png';
import cartIcon from './images/cart.png';
import profilePic from './images/profile1.png'


function Navbar() {
    return (
        <>
            {/* Nav bar */}
            < nav className={styles.navbar} >
                {/* Header logo */}
                < img src={logo} className={styles.logo} />

                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Explore</a>
                    </li>
                    <li>
                        <a>Support</a>
                    </li>
                    <li>
                        <a>Contact</a>
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