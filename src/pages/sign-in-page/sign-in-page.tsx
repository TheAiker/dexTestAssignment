

export function SignIn(): JSX.Element {
    return(
        <div>
            <div>
                <span>
                    Sign In
                </span>
                <form action="http://dev.trainee.dex-it.ru/api​/Auth​/SignIn">
                    <label htmlFor="logIn">LogIn</label>
                    <input type="text" id="logIn" name="logIn"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            <div>
                <span>
                    sign in pic here
                </span>
            </div>
        </div>

    );
}