import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../../core/redux/authReducer";
import ButtonCSS from "./signOutButton.module.css";
import inputRounded from "../../../assets/icon/input_rounded.svg";

export function SignOutButton(): JSX.Element {
  const dispatch = useDispatch();

  const history = useHistory();

  const signOutOnClickHandler = () => {
    dispatch(signOut());
    history.push("/signIn");
  };

  return (
    <div className={ButtonCSS.signOutButtonContainer}>
      <button
        onClick={signOutOnClickHandler}
        className={ButtonCSS.signOutButton}
      >
        <img
          src={inputRounded}
          alt=""
          className={ButtonCSS.signOutButtonIcon}
        />
        <span className={ButtonCSS.signOutButtonText}>Sign out</span>
      </button>
    </div>
  );
}
