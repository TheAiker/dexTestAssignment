import SignInCSS from './sign-in.module.css'
import signInImage from '../../assets/images/signInImage.svg'
import cx from 'classnames'

export function SignIn(): JSX.Element {
    return(
        <div className={SignInCSS.signInPageContainer}>
            <div className={SignInCSS.signInFormContainer}>
            
                <form action="http://dev.trainee.dex-it.ru/api​/Auth​/SignUp" className={SignInCSS.signInForm}>
                    <span className={SignInCSS.signInFormTitle}>
                        Sign In
                    </span>

                    <label className={SignInCSS.signInFormLabel} htmlFor="Name">Name</label>
                    <input className={SignInCSS.signInFormInputText} type="text" id="Name" name="userName"/>

                    <label className={SignInCSS.signInFormLabel} htmlFor="Login">Login</label>
                    <input className={SignInCSS.signInFormInputText} type="text" id="Login" name="login"/>

                    <label className={SignInCSS.signInFormLabel} htmlFor="password">Password</label>
                    <input className={cx(SignInCSS.signInFormInputText, { [SignInCSS.signInFormInputTextError]: false })} type="password" id="password" name="password"/>

                    <label className={SignInCSS.signInFormLabel} htmlFor="repeatedPassword">Enter your password again</label>
                    <input className={SignInCSS.signInFormInputText} type="password" id="repeatedPassword" name="repeatedPassword"/>
                    
                    <div className={SignInCSS.signInFormCheckbox}>
                        <input className={SignInCSS.signInFormCheckboxInput}type="checkbox" id="checkbox" name="checkbox"/>
                        <label className={SignInCSS.signInFormCheckboxLabel} htmlFor="checkbox">I accept the agreement</label>
                    </div>

                    <input className={SignInCSS.signInFormSubmitButton} type="submit" value="Submit"/>
                </form>
                <div className={SignInCSS.alreadyMemberParagraph}>
                    <p>Already a member? Sign In</p>
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