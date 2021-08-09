import SignUpCSS from './sign-up.module.css';
import signUpImage from '../../assets/images/signUpImage.svg';
import cx from 'classnames';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

type SignUpFormData = {
    userName: string;
    login: string;
    password: string;
    repeatedPassword: string;
}

export function SignUp(): JSX.Element {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<SignUpFormData>();
    const onSubmit: SubmitHandler<SignUpFormData> = data => console.log(data);
    const password = useRef({});
    password.current = watch("password", "");
    
    return(
        <div className={SignUpCSS.signUpPageContainer}>
            <div className={SignUpCSS.signUpFormContainer}>
            
                <form  className={SignUpCSS.signUpForm} onSubmit={handleSubmit(onSubmit)}>
                    <span className={SignUpCSS.signUpFormTitle}>
                        Sign Up
                    </span>

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="Name">Name</label>
                    <input className={SignUpCSS.signUpFormInputText} type="text" id="Name" {...register("userName", {required: true, minLength: 4, maxLength: 20})}/>
                    {errors.userName && "Name is required"}

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="Login">Login</label>
                    <input className={SignUpCSS.signUpFormInputText} type="text" id="Login" {...register("login", { required: true, maxLength: 20})}/>
                    {errors.login && "Login is requred"}

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="password">Password</label>
                    <input className={cx(SignUpCSS.signUpFormInputText, { [SignUpCSS.signUpFormInputTextError]: false })} type="password" id="password" {...register("password", { required: true, min: 8 })}/>
                    {errors.password && "Enter your password"}

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="repeatedPassword">Confirm password </label>
                    <input className={SignUpCSS.signUpFormInputText} type="password" id="repeatedPassword" {...register("repeatedPassword", { validate: value => value === password.current || "Passwords do not match"})}/>
                    {errors.repeatedPassword && <p>{errors.repeatedPassword.message}</p>}

                    <div className={SignUpCSS.signUpFormCheckbox}>
                        <input className={SignUpCSS.signUpFormCheckboxInput}type="checkbox" id="checkbox" name="checkbox" required/>
                        <label className={SignUpCSS.signUpFormCheckboxLabel} htmlFor="checkbox">I accept the agreement</label>
                    </div>

                    <input className={SignUpCSS.signUpFormSubmitButton} type="submit" value="Submit"/>
                </form>
                <div className={SignUpCSS.alreadyMemberParagraph}>
                    <p>Already a member? <Link to="/signIn">Sign In</Link></p>
                </div>
            </div>
            <div className={SignUpCSS.imageContainer}>
                <span>
                    <img className={SignUpCSS.signUpImage} src={signUpImage} alt="" />
                </span>
            </div>
        </div>

    );
}
