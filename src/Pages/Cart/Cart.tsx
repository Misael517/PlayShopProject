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

interface CheckOut {
    id: number,
    games: Games[],
}

const cartProducts: CheckOut[] = [

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
    const [myList, setMyList] = useState<Games[]>([])
    const [item, setItem] = useState<Games>(jsonData[0])
   

    const handleAdd = (myList: Games[]) => {
       const newList = [...myList, item]
       setMyList(newList)
       console.log(myList)
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