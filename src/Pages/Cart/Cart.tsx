import styles from './Cart.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import jsonData from '../../assets/gamesInfo.json';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img7 from '/images/gamesImg/GodOfWar/img7.jpg';

interface Games {
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


function Cart() {
    const [myList, setMyList] = useState<Games[]>([])
    const [item, setItem] = useState<Games>(jsonData[0])


    const handleAdd = (myList: Games[]) => {
        setMyList([item, ...myList])
    }

    const navigate = useNavigate()

    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>


                <div style={{ width: '100%', textAlign: 'center' }}>
                    <input style={{ color: 'black' }} type='text' placeholder='array testing' onChange={(e) => setItem(jsonData[parseInt(e.target.value)])} />
                    <button style={{ color: 'black' }} onClick={() => handleAdd(myList)} >
                        Add
                    </button>
                </div>
                <section className={styles.cartSection}>

                    <div className={styles.itemsSection}>
                        {myList.map((item) => {
                            return (
                                <div className={styles.itemsContainer}>
                                    <div className={styles.itemIcon} style={{ backgroundImage: `url(${item.icon})` }} key={item.id} onClick={() => navigate(`${item.link}`)}>

                                    </div>

                                    <div className={styles.itemInfo}>
                                        <h2>{item.name}</h2>
                                        <div className={styles.dataContainer} >
                                            <p className={styles.itemData}>{item.Publisher}</p>
                                            <p className={styles.itemData}>{item.Platforms}</p>
                                            <p className={styles.itemData}>{item.Genre}</p>
                                        </div>

                                        <div className={styles.itemPrice}>
                                            <p><span className={item.isOnSale ? styles.discountColor : ''}>{item.isOnSale ? `-${item.discount}%` : ''}</span></p>
                                            <p><span className={item.isOnSale ? styles.strikeThrough : ''}>{item.isOnSale ? `${item.price}%` : ''}</span></p>
                                            <p>{item.isOnSale ? `$${item.actualPrice}` : (item.coomingSoon ? '...' : `$${item.price}`)}</p>
                                        </div>
                                    </div>

                                    <button className={styles.removeBtn}>remove</button>
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