import { memo, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import styles from './BestOfTheYear.module.css';
import jsonData from '../../assets/gamesInfo.json';

interface GameContent {
    id: number;
    link?: string;
    icon: string;
}

function BestOfTheYear() {
    const navigate = useNavigate()
    const [images, setImages] = useState<string[]>()

    useEffect(() => {
        const fetchImages = async () => {
          try {
            const bestOfTheYearRef = ref(storage, "/images/bestOfTheYear");
            const response = await listAll(bestOfTheYearRef);
    
            const downloadPromises = response.items.map(async (item) => {
              const url = await getDownloadURL(item);
              return url;
            });
    
            const imageUrls = await Promise.all(downloadPromises);
            setImages(imageUrls);
          } catch (error) {
            console.error("Error fetching images:", error);
          }
        };
    
        fetchImages();
      }, []);


      const createArray = () => {
        if (images) {
            const content: GameContent[] = [
                { id: 1, link: jsonData[36].link, icon: images[0], },
                { id: 2, link: jsonData[37].link, icon: images[1], },
                { id: 3, link: jsonData[38].link, icon: images[2], },
                { id: 4, link: jsonData[39].link, icon: images[3], },
                { id: 5, link: jsonData[41].link, icon: images[4], },
                { id: 6, link: jsonData[40].link, icon: images[5], },
            ]

            return content
        }    
      }

      const gamesContent = createArray()


    return (
        <>
            <h2 className={styles.sectionName}>Best of the year</h2>
            <div className={styles.itemsGrid}>
                {gamesContent?.map((game) => (
                    <div className={styles.itemsContent} key={game.id} style={{ backgroundImage: `url(${game.icon})` }} onClick={() => navigate(`${game.link}`)}>

                    </div>
                ))}
            </div>
        </>
    )
}

const BestOfTheYearMemo = memo(BestOfTheYear)

export default BestOfTheYearMemo