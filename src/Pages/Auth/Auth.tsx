import { signup } from '../../config/firebase';
import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './Auth.module.css';

interface Inputs {
    email: string;
    password: string;
}

async function handleSignUp(email: string, password: string) {
    await signup(email, password);
}

function Auth() {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => { handleSignUp(data.email, data.password); };

    console.log(watch('email'));

    return (
        <div className={styles.authContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email input */}
                <label htmlFor='email'>{errors.email ? 'This field is required' : 'Email:'}</label>
                <input
                    placeholder='Email'
                    type='email'
                    id='Email'
                    className={styles.inputField}
                    {...register("email", {
                        required: true,
                        minLength: {
                            value: 20,
                            message: 'The min length is 20'
                        }
                    })}
                />

                {/* Password input */}
                <label htmlFor='password'>{errors.password && 'This field is required'}</label>

                <input
                    placeholder='Password'
                    type='password'
                    id='password'
                    className={styles.inputField}
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 20,
                            message: 'The min length is 20'
                        }
                    })}
                />


                <input type="submit" className={styles.submitButton} />
            </form>
        </div >
    );
}

export default Auth;