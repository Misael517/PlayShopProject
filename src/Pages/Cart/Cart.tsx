import { removeItem, increaseAmount, decreaseAmount } from '../../app/Slices/CartSlice';
import type { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import img7 from '/images/gamesImg/GodOfWar/img7.jpg';

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
    itemAmount: number
}


function Cart() {
    const dispatch = useDispatch()
    const myCart = useSelector((state: RootState) => state.cart.itemArr);
    const navigate = useNavigate()

    // Retrieve the local storage data
    const currentCart = localStorage.getItem('gamesCart')
    let cartItems: Game[] = [];

    if (currentCart !== null) {
        cartItems = JSON.parse(currentCart);
    }


    // calculate the total price
    function calculatePrice(price: number) {
        cartItems.forEach((item) => {
            if (item.isOnSale) {
                price += item.actualPrice
            } else if (item.isOnSale === false) {
                price += item.price
            }
        })

        return price
    }

    const subTotal = calculatePrice(0)




    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>


                {/* Cart section */}
                <section className={styles.cartSection}>

                    {/* Item container with descriptions */}
                    <div className={styles.itemsSection}>
                        {cartItems.map((item) => {
                            return (
                                <div className={styles.itemsContainer} key={item.id}>
                                    <div className={styles.itemIcon} style={{ backgroundImage: `url(${item.icon})` }} onClick={() => navigate(`${item.link}`)}>

                                    </div>

                                    <div className={styles.itemInfo}>
                                        <h2>{item.name}</h2>
                                        <div className={styles.dataContainer} >
                                            <p className={styles.itemData}>{item.Publisher}</p>
                                            <p className={styles.itemData}>{item.Platforms}</p>
                                            <p className={styles.itemData}>{item.Genre}</p>
                                        </div>

                                        <button onClick={() => dispatch(decreaseAmount(item))}>Decrease</button>
                                        <p>{item.itemAmount}</p>
                                        <button onClick={() => dispatch(increaseAmount(item))}>Increase</button>

                                        <div className={styles.itemPrice}>
                                            <p><span className={item.isOnSale ? styles.discountColor : ''}>{item.isOnSale ? `-${item.discount}%` : ''}</span></p>
                                            <p><span className={item.isOnSale ? styles.strikeThrough : ''}>{item.isOnSale ? `${item.price}` : ''}</span></p>
                                            <p>{item.isOnSale ? `$${item.actualPrice}` : (item.coomingSoon ? '...' : `$${item.price}`)}</p>
                                        </div>
                                    </div>

                                    <button className={styles.removeBtn} onClick={() => dispatch(removeItem(item))}>remove</button>
                                </div>)
                        })}
                    </div>


                    <div className={styles.checkOutSection}>
                        <img src={img7} className={styles.gamePortrait} />
                        <div className={styles.checkOutInfo}>

                            <h3>Subtotal:</h3>
                            <p className={styles.subTotal}>{subTotal.toFixed(2)}</p>

                        </div>
                        <button className={styles.checkOutBtn}><a target="_blank" href={''}></a>Start check out</button>
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    )
}

export default Cart