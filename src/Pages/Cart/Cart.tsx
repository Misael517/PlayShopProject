import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import jsonData from '../../assets/gamesInfo.json';
import { useNavigate } from 'react-router-dom';

import img7 from '/images/gamesImg/GodOfWar/img7.jpg';

interface Games {
    id: number,
    name: string;
    icon: string;
    link?: string;
    price: number;
    coomingSoon: boolean;
    isOnSale: boolean;
    discount: number;
    actualPrice: number;
}

interface CheckOut {
    id: number,
    games: Games[],
}

const itemsCheckOut: CheckOut[] = [
    {
        id: 0,
        games: [
            {
                id: 13,
                name: jsonData[13].name,
                icon: jsonData[13].icon,
                link: jsonData[13].link,
                isOnSale: jsonData[13].isOnSale,
                price: jsonData[13].price,
                coomingSoon: jsonData[13].coomingSoon,
                discount: jsonData[13].discount,
                actualPrice: jsonData[13].actualPrice,
            },

        ]
    },


]

function Cart() {
    const navigate = useNavigate()

    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>
                <section className={styles.itemsContainer}>

                    {/* Page title */}
                    <h2 className={styles.sectionName}>Shooping Cart</h2>

                    {/* Cart Item */}
                    <div className={styles.cartItemContainer}>
                        <div className={styles.cartItem}>
                            {itemsCheckOut[0].games.map((games) => (
                                <div className={styles.itemsContent} style={{ backgroundImage: `url(${games.icon})` }} key={games.id} onClick={() => navigate(`${games.link}`)}>

                                </div>))}

                            {/* Cart Item information */}
                            <div className={styles.gamesDesc}>
                                <h3 className={styles.gamesName}>{jsonData[13].name}</h3>
                                <p>{jsonData[13].Publisher}</p>
                                <p>{jsonData[13].Genre}</p>
                            </div>
                        </div>



                        {/* Check out section */}
                        <div className={styles.checkOutSection}>
                            <img src={img7} className={styles.gamePortrait} />
                            <div className={styles.gamesInfoCheck}>

                                <h3>Subtotal:</h3>
                                <div className={styles.gamesPriceCheck}>
                                    <p><span className={jsonData[13].isOnSale ? styles.discountColor : ''}>{jsonData[13].isOnSale ? `-${jsonData[13].discount}%` : ''}</span></p>
                                    <p><span className={jsonData[13].isOnSale ? styles.strikeThrough : ''}>{jsonData[13].isOnSale ? `${jsonData[13].price}%` : ''}</span></p>
                                    <p style={{ textAlign: 'center' }}>{jsonData[13].isOnSale ? `$${jsonData[13].actualPrice}` : (jsonData[13].coomingSoon ? '...' : `$${jsonData[13].price}`)}</p>
                                </div>
                            </div>
                            <button className={styles.addBtn}><a target="_blank" href={''}></a>Start check Out</button>
                        </div>
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