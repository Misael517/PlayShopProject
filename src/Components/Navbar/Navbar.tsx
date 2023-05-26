import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './images/logo.png';
import cartIcon from './images/cart.png';
import profilePic from './images/profile1.png';


interface Game {
    id: number,
    name: string;
    icon: string;
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
    const navigate = useNavigate()

    // Count all the items inside the cart
    const currentCart = localStorage.getItem('gamesCart')
    let cartItems: Game[] = [];

    if (currentCart !== null) {
        cartItems = JSON.parse(currentCart);
    }

    function countItems(amount: number) {
        cartItems.forEach((game) => {
            amount += game.itemAmount
        })

        localStorage.setItem('cartAmout', JSON.stringify(amount))
    }

    countItems(0)
    const currentAmout = localStorage.getItem('cartAmout')


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
                    <p style={{ fontSize: '1vh' }}>{currentAmout}</p>
                    <img src={cartIcon} className={styles.cart} onClick={() => navigate('/Cart')} />
                </div>

                <img src={profilePic} className={styles.profilePic} onClick={() => navigate('/Profile')} />
                <p className={styles.profileName} onClick={() => navigate('/Profile')}>UserName</p>
            </div>
        </>
    )
}

export default Navbar