import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signOut } from "../../../core/redux/authSlice";
import ButtonCSS from "./signOutButton.module.css";
import inputRounded from "../../../assets/icon/input_rounded.svg";
import { FC } from "react";
import { useCallback } from "react";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  imagePath?: string;
}

export const SignOutButton: FC<IButtonProps> = (props) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const signOutOnClickHandler = useCallback(() => {
    dispatch(signOut());
    history.push("/signIn");
  }, [history, dispatch]);

  return (
    <div className={ButtonCSS.signOutButtonContainer}>
      <button
        onClick={signOutOnClickHandler}
        className={ButtonCSS.signOutButton}
      >
        <img
          src={props.imagePath || inputRounded}
          alt=""
          className={ButtonCSS.signOutButtonIcon}
        />
        <span className={ButtonCSS.signOutButtonText}> {props.title}</span>
      </button>
    </div>
  );
};
