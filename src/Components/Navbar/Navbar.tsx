import styles from './Navbar.module.css';
import logo from './images/logo.png';
import cartIcon from './images/cart.png';
import profilePic from './images/profile1.png';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate()

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
                <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} />
                <img src={profilePic} className={styles.profilePic} onClick={() => navigate('/Profile')} />
                <p className={styles.profileName} onClick={() => navigate('/Profile')}>UserName</p>
            </div>
        </>
    )
}

export default Navbar