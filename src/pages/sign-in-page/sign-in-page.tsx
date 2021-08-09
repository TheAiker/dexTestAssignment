import SignInCSS from './sign-in.module.css';
import signInImage from '../../assets/images/signInImage.svg';
import cx from 'classnames';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom'

    type SignInFormData = {
        login: string;
        password: string;
    }

export function SignIn(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();
    const onSubmit: SubmitHandler<SignInFormData> = data => console.log(data);
    

    return(
        <div className={SignInCSS.signInPageContainer}>
            <div className={SignInCSS.signInFormContainer}>
            
                <form className={SignInCSS.signInForm} onSubmit={handleSubmit(onSubmit)}>
                    <span className={SignInCSS.signInFormTitle}>
                        Sign In
                    </span>

                    <label className={SignInCSS.signInFormLabel} htmlFor="Login">Login</label>
                    <input className={SignInCSS.signInFormInputText} type="text" id="Login" {...register("login", { required: true, maxLength: 20})}/>
                    {errors.login && "Login is required"}

                    <label className={SignInCSS.signInFormLabel} htmlFor="password">Password</label>
                    <input className={cx(SignInCSS.signInFormInputText, { [SignInCSS.signInFormInputTextError]: false })} type="password" id="password" {...register("password", { required: true, min: 8 })}/>
                    {errors.password && "Password is required"}

                    <input className={SignInCSS.signInFormSubmitButton} type="submit" value="Submit"/>
                </form>
                <div className={SignInCSS.alreadyMemberParagraph}>
                    <p>Not a member yet? <Link to="/signUp">Sign Up</Link></p>
                </div>
            </div>
            <div className={SignInCSS.imageContainer}>
                <span>
                    <img className={SignInCSS.signInImage} src={signInImage} alt="" />
                </span>
            </div>
        </div>

    );
}