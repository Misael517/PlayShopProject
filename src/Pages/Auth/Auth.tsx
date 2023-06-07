import styles from './Auth.module.css';
import SingIn from '../../Components/SingIn/SingIn';

interface Inputs {
    email: string;
    password: string;
}

function Auth() {
    return (
        <div>
            <SingIn />
        </div >
    );
}

export default Auth;