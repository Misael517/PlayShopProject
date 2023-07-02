import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import logo from '/images/nav/logo.png';
import { memo } from 'react';

interface Inputs {
    email: string,
    password: string,
}

function Auth() {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => handleSingIn(data.email, data.password)

    // Sing In function:
    const handleSingIn = async (email: string, password: string) => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            localStorage.setItem('profileSettings', 'flex')
            localStorage.setItem('signIn', 'none')
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.authContainer}>
            <img src={logo} className={styles.logo} onClick={() => navigate("/")} alt="PayShop Logo" />

            <form onSubmit={handleSubmit(onSubmit)}>

                {/* Email input */}
                <div className={styles.fieldContainer}>
                    <label htmlFor='email'>Email</label>
                    <input
                        placeholder={errors.email ? 'This field is required' : 'email'}
                        type='email'
                        id='email'
                        className={styles.inputField}
                        {...register("email", {
                            required: true,
                            minLength: {
                                value: 10,
                                message: 'The min length is 20'
                            }
                        })}
                    />
                </div>

                {/* Password input */}
                <div className={styles.fieldContainer}>
                    <label htmlFor='password'>Password</label>

                    <input
                        placeholder={errors.password ? 'This field is required' : 'password'}
                        type='password'
                        id='password'
                        className={styles.inputField}
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 5,
                                message: 'The min length is 20'
                            }
                        })}
                    />
                </div>


                <div className={styles.buttonContainer}>
                    <input type="submit" className={styles.submitButton} value='Sing In' />
                </div>
            </form>

            <div className={styles.demoContainer}>
                <h3>Demo Account</h3>
                <p>Email - playshopdemo@gmail.com</p>
                <p>Password - 123456789</p>
            </div>
        </div >
    )
}

const AuthMemo = memo(Auth)

export default AuthMemo