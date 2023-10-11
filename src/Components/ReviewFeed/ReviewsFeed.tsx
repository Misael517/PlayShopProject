import styles from './ReviewsFeed.module.css';
import { memo } from 'react';

function ReviewsFeed() {
    return <>

        <div className={styles.reviewsContainer}>
            <h3 className={styles.reviewsTitle}>PlayShop User Reviews</h3>
            <div className={styles.starsContainer}>
                <p className={styles.reviewsRating}>4.7</p>

                <span className={styles.stars}>

                </span >
                <span className={styles.stars}>

                </span>
                <span className={styles.stars}>

                </span>
                <span className={styles.stars}>

                </span>
                <span className={styles.stars}>

                </span>
            </div>
        </div>
    </>
}

const ReviewsFeedMemo = memo(ReviewsFeed)

export default ReviewsFeedMemo

