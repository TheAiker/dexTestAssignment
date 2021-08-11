import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../core/redux/actions';
import ButtonCSS from './signOutButton.module.css'


export function SignOutButton(): JSX.Element {
    const dispatch = useDispatch();
    const { signOut } = bindActionCreators(actionCreators, dispatch);

    const history = useHistory();

    const signOutOnClickHandler = () => {
        signOut();
        history.push('/signIn');    
    }

    return (
        <div className={ButtonCSS.signOutbuttonContainer}>
            <button onClick={signOutOnClickHandler} className={ButtonCSS.signOutbutton}>Sign Out</button>
        </div>
    );
}