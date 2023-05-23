import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import jsonData from '../../assets/gamesInfo.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
}

interface Cart {
    id: string;
    game: Game;
}

function Cart() {
    const [myList, setMyList] = useState<Cart[]>([])
    const [item, setItem] = useState<Game>(jsonData[0])
    const navigate = useNavigate()


    // Add to cart function
    const handleAdd = () => {
        const newItem: Cart = {
            id: crypto.randomUUID(),
            game: item
        }
        setMyList([newItem, ...myList])
    }

    // remove function
    const handleRemove = (cartGame: string) => {
        setMyList(myList.filter((cartItem) => cartItem.id !== cartGame));
    };

    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>

                {/* Input for testing */}
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <input style={{ color: 'black' }} type='text' placeholder='array testing' onChange={(e) => setItem(jsonData[parseInt(e.target.value)])} />
                    <button style={{ color: 'black' }} onClick={() => handleAdd()} >
                        Add
                    </button>
                </div>

                {/* Cart section */}
                <section className={styles.cartSection}>

                    {/* Item container with descriptions */}
                    <div className={styles.itemsSection}>
                        {myList.map((item, key) => {
                            return (
                                <div className={styles.itemsContainer} key={item.id}>
                                    <div className={styles.itemIcon} style={{ backgroundImage: `url(${item.game.icon})` }} onClick={() => navigate(`${item.game.link}`)}>

                                    </div>

                                    <div className={styles.itemInfo}>
                                        <h2>{item.game.name}</h2>
                                        <div className={styles.dataContainer} >
                                            <p className={styles.itemData}>{item.game.Publisher}</p>
                                            <p className={styles.itemData}>{item.game.Platforms}</p>
                                            <p className={styles.itemData}>{item.game.Genre}</p>
                                        </div>

                                        <div className={styles.itemPrice}>
                                            <p><span className={item.game.isOnSale ? styles.discountColor : ''}>{item.game.isOnSale ? `-${item.game.discount}%` : ''}</span></p>
                                            <p><span className={item.game.isOnSale ? styles.strikeThrough : ''}>{item.game.isOnSale ? `${item.game.price}%` : ''}</span></p>
                                            <p>{item.game.isOnSale ? `$${item.game.actualPrice}` : (item.game.coomingSoon ? '...' : `$${item.game.price}`)}</p>
                                        </div>
                                    </div>

                                    <button className={styles.removeBtn} onClick={() => handleRemove(item.id)}>remove</button>
                                </div>)
                        })}
                    </div>


                    <div className={styles.checkOutSection}>
                        <img src={img7} className={styles.gamePortrait} />
                        <div className={styles.checkOutInfo}>

                            <h3>Subtotal:</h3>
                            <div className={styles.gamesSubtotal}>
                                <p><span className={jsonData[13].isOnSale ? styles.discountColor : ''}>{jsonData[13].isOnSale ? `-${jsonData[13].discount}%` : ''}</span></p>
                                <p><span className={jsonData[13].isOnSale ? styles.strikeThrough : ''}>{jsonData[13].isOnSale ? `${jsonData[13].price}%` : ''}</span></p>
                                <p style={{ textAlign: 'center' }}>{jsonData[13].isOnSale ? `$${jsonData[13].actualPrice}` : (jsonData[13].coomingSoon ? '...' : `$${jsonData[13].price}`)}</p>
                            </div>
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