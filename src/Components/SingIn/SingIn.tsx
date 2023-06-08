import styles from './SingIn.module.css';
import { auth } from '../../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Inputs {
    email: string,
    password: string,
}


// Sing In function:
const handleSingIn = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error){
        console.log(error)
    }
}

console.log(auth?.currentUser?.email)


function SingIn() {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => handleSingIn(data.email, data.password)

    return (
        <div className={styles.authContainer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email input */}
                <div>
                  <label htmlFor='email'>Email:</label>
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
                <div>
                <label htmlFor='password'>Password:</label>

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


                <div>
                   <input type="submit" className={styles.submitButton} />
                </div>
            </form>
        </div >
    )
}

export default SingIn