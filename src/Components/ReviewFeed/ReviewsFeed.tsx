import styles from './ReviewsFeed.module.css';
import { memo } from 'react';

function ReviewsFeed() {
    return <>

        <div>
            <h3 className={styles.reviewsTitle}>User reviews</h3>
            <p className={styles.reviewsStatus}>Positive</p>
        </div>
    </>
}

const ReviewsFeedMemo = memo(ReviewsFeed)

export default ReviewsFeedMemo

