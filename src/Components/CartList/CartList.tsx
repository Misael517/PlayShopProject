import { removeItem, increaseAmount, decreaseAmount } from '../../app/Slices/CartSlice';
import type { RootState } from '../../app/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';
import styles from './CartList.module.css'
import img7 from '/images/gamesImg/GodOfWar/img7.webp';


interface Game {
    id: number,
    name: string;
    icon: string;
    searchIcon: string;
    Platforms: string,
    Publisher: string,
    Genre: string,
    link?: string;
    price: number;
    comingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
    itemAmount: number;
    cartPrice: number;
}


function CartList() {
    const dispatch = useDispatch()
    useSelector((state: RootState) => state.cart.itemArr);
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
                price += item.cartPrice
            } else if (item.isOnSale === false) {
                price += item.cartPrice
            }
        })

        return price
    }

    const total = calculatePrice(0)




    return (
        <>
            {/* Item container with descriptions */}
            <div className={styles.titleFrame}>
                <h1>Shopping Cart</h1>
            </div>

            <div className={styles.cartContainer}>
                <div className={styles.itemsSection}>

                    {/* Shows the items added to the cart */}
                    {cartItems.length > 0 ? cartItems.map((item) => {
                        return (
                            <div className={styles.itemsContainer} key={item.id}>

                                <img
                                    className={styles.itemIcon}
                                    src={item.icon}
                                    onClick={() => navigate(`${item.link}`)}
                                    alt={`${item.name} icon`}
                                    loading='lazy'
                                    tabIndex={0}
                                    role='link'
                                />

                                {/* Item details */}
                                <div className={styles.itemInfo}>
                                    <div>
                                        <h2>{item.name}</h2>
                                        <div className={styles.dataContainer} >
                                            <p className={styles.itemData}>{item.Publisher}</p>
                                            <p className={styles.itemData}>{item.Platforms}</p>
                                            <p className={styles.itemData}>{item.Genre}</p>
                                        </div>
                                    </div>

                                    {/* Calculate the price and the amount of items */}
                                    <div className={styles.priceAmount}>
                                        <div className={styles.amountContainer}>
                                            <button
                                                className={styles.decreaseBtn}
                                                onClick={() => dispatch(decreaseAmount(item))}>
                                                -
                                            </button>

                                            <p>{item.itemAmount}</p>

                                            <button
                                                className={styles.increaseBtn}
                                                onClick={() => dispatch(increaseAmount(item))}>
                                                +
                                            </button>
                                        </div>

                                        {/* Shows the item price */}
                                        <div className={styles.itemPrice}>
                                            <p>{item.isOnSale ? `$${item.cartPrice.toFixed(2)}` : (item.comingSoon ? '...' : `$${item.cartPrice.toFixed(2)}`)}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Remove the item */}
                                <button className={styles.removeBtn} onClick={() => dispatch(removeItem(item))}>remove</button>
                            </div>)
                    }) : (

                        // Appears when there is nothing in the cart
                        <div className={styles.emptyContainer}>
                            <h1 className={styles.emptyTitle}>Your PlayShop Cart is empty</h1>
                        </div>
                    )}
                </div>


                <div className={styles.checkOutSection}>
                    <img src={img7} className={styles.gamePortrait} alt='Shopping Image' loading='lazy' />
                    <div className={styles.checkOutInfo}>

                        <h2 className={styles.totalTitle}>Total:</h2>
                        <p>${total.toFixed(2)}</p>

                    </div>
                    <button className={styles.checkOutBtn}>Start check out</button>
                </div>
            </div>

        </>
    )
}

const CartListMemo = memo(CartList)

export default CartListMemo