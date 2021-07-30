import SignInCSS from './sign-in.module.css';
import signInImage from '../../assets/images/signInImage.svg';
import cx from 'classnames';
import React from 'react';
import useForm from 'react-hook-form';

type FormData = {
    login
}

export function SignIn(): JSX.Element {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div className={SignInCSS.signInPageContainer}>
            <div className={SignInCSS.signInFormContainer}>
            
                <form action="http://dev.trainee.dex-it.ru/api​/Auth​/SignUp" className={SignInCSS.signInForm} onSubmit={handleSubmit(onSubmit)}>
                    <span className={SignInCSS.signInFormTitle}>
                        Sign In
                    </span>

                    <label className={SignInCSS.signInFormLabel} htmlFor="Login">Login</label>
                    <input className={SignInCSS.signInFormInputText} type="text" id="Login" name="login" ref={register}/>

                    <label className={SignInCSS.signInFormLabel} htmlFor="password">Password</label>
                    <input className={cx(SignInCSS.signInFormInputText, { [SignInCSS.signInFormInputTextError]: false })} type="password" id="password" name="password"/>

                    <input className={SignInCSS.signInFormSubmitButton} type="submit" value="Submit"/>
                </form>
                <div className={SignInCSS.alreadyMemberParagraph}>
                    <p>Not a member yet? Sign Up</p>
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