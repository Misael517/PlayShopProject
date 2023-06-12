import { memo, lazy, Suspense } from 'react';
import styles from './SingIn.module.css';

const Auth = lazy(() => import('../../Components/Auth/Auth'))

function SingIn() {
    return (
        <div className={styles.SingInBody}>
            <Suspense>
                <Auth />
            </Suspense>
        </div >
    );
}

const SingInMemo = memo(SingIn)

export default SingInMemo