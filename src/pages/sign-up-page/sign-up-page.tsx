import SignUpCSS from './sign-up.module.css'
import signUpImage from '../../assets/images/signUpImage.svg'
import cx from 'classnames'

export function SignUp(): JSX.Element {
    
    return(
        <div className={SignUpCSS.signUpPageContainer}>
            <div className={SignUpCSS.signUpFormContainer}>
            
                <form action="http://dev.trainee.dex-it.ru/api​/Auth​/SignUp" className={SignUpCSS.signUpForm}>
                    <span className={SignUpCSS.signUpFormTitle}>
                        Sign Up
                    </span>

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="Name">Name</label>
                    <input className={SignUpCSS.signUpFormInputText} type="text" id="Name" name="userName"/>

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="Login">Login</label>
                    <input className={SignUpCSS.signUpFormInputText} type="text" id="Login" name="login"/>

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="password">Password</label>
                    <input className={cx(SignUpCSS.signUpFormInputText, { [SignUpCSS.signUpFormInputTextError]: false })} type="password" id="password" name="password"/>

                    <label className={SignUpCSS.signUpFormLabel} htmlFor="repeatedPassword">Enter your password again</label>
                    <input className={SignUpCSS.signUpFormInputText} type="password" id="repeatedPassword" name="repeatedPassword"/>
                    
                    <div className={SignUpCSS.signUpFormCheckbox}>
                        <input className={SignUpCSS.signUpFormCheckboxInput}type="checkbox" id="checkbox" name="checkbox"/>
                        <label className={SignUpCSS.signUpFormCheckboxLabel} htmlFor="checkbox">I accept the agreement</label>
                    </div>

                    <input className={SignUpCSS.signUpFormSubmitButton} type="submit" value="Submit"/>
                </form>
                <div className={SignUpCSS.alreadyMemberParagraph}>
                    <p>Already a member? Sign In</p>
                </div>
            </div>
            <div className={SignUpCSS.imageContainer}>
                <span>
                    <img src={signUpImage} alt="" />
                </span>
            </div>
        </div>

    );
}
