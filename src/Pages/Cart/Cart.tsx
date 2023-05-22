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
       const newList = [...myList, item]
       setMyList(newList)
    }

    const navigate = useNavigate()

    return (
        <>
            <header className={styles.header}>
                <Navbar />
            </header>
            <main className={styles.main}>
                <section className={styles.itemsContainer}>

                    <input style={{ color: 'black' }} type='text' placeholder='array testing' onChange={(e)=>  setItem(jsonData[parseInt(e.target.value)])} />
                    <button style={{ color: 'black' }} onClick={()=> handleAdd(myList)} >
                        Add
                    </button>

                 {myList.map((item)=> {
                    return <>
                      <h1 style={{color: 'black'}} key={item.id}>{item.name}</h1>
                      <h1 style={{color: 'black'}} key={item.id}>{item.price}</h1>
                    </>
                 })}
                    


                </section>
            </main>

            <footer className={styles.footer}>
                <Footer />
            </footer>
        </>
    )
}

export default Cart