import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import type { RootState } from "../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmount } from "../../app/Slices/CartSlice";
import { useEffect } from 'react';
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
    const myCart = useSelector((state: RootState) => state.cart.itemArr)
    const amount = useSelector((state: RootState) => state.cart.totalAmount)
    const dispatch = useDispatch()

    // // Count all the items inside the cart
    const currentCart = localStorage.getItem('gamesCart')
    let cartItems: Game[] = [];

    if (currentCart !== null) {
        cartItems = JSON.parse(currentCart);
    }

    

    // const currentAmount = countItems(cartItems)
    // localStorage.setItem('cartAmout', JSON.stringify(currentAmount))

    
    useEffect(() => {
        function countItems(items: Game[]) {
            let count = 0
    
            items.forEach((game) => {
                count += game.itemAmount
            });
    
            return count
        }
        dispatch(calculateAmount(countItems(cartItems)))
    }, [myCart])


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