import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Form from "../components/From";
import classes from "../components/Form.module.css";
import Button from "../components/Button";

export default function Login(props) {
  const history = useHistory();
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const enteredUsername = useRef();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  let val1;
  let val2;
  let val3;

  const submitHandler = async function (e) {
    setIsLoading(true);
    e.preventDefault();

    const username = enteredUsername?.current?.value;
    const email = enteredEmail?.current?.value;
    const password = enteredPassword?.current?.value;

    if (!username || username.length < 3) {
      val1 = "Please enter a valid username";
    } else {
      val1 = "";
    }
    if (!email || !email.includes("@") || !email.split("@")[1].includes(".")) {
      val2 = "Please enter a valid email, a valid email must contain @";
    } else {
      val2 = "";
    }
    if (!password || password.length < 8) {
      val3 =
        "please enter a valid password, a valid passsword must contain at least 8 characters";
    } else {
      val3 = "";
    }
    setUsernameError(val1);
    setEmailError(val2);
    setPasswordError(val3);

    if (!val1 && !val2 && !val3) {
      const body = { email, password, returnSecureToken: true };
      console.log(body);
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDVPuT3KXYIa-o5a565_WGyiMVt5kR9_bc`,
        {
          method: "POST",
          header: {
            "content-type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const data = await res.json();

      if (res.ok) {
        props.getData(res.ok);
        props.getUser(data.email);
        document.cookie = `jwt=${data.idToken}`;
        history.replace("/");
      } else {
        setIsFailed(data.error.message);
        setTimeout(() => {
          setIsFailed("");
        }, 2000);
      }
    } else {
      enteredUsername.current.value = "";
      enteredEmail.current.value = "";
      enteredPassword.current.value = "";
    }
    setIsLoading(false);
  };
  //gg

  if (isLoading) {
    return <p>is loading...</p>;
  }
  if (isFailed) {
    return <p>{isFailed}</p>;
  }
  return (
    <Form onSubmit={submitHandler}>
      <h2>Signup</h2>
      <div className={classes.control}>
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input
          ref={enteredUsername}
          type="text"
          id="username"
          className={classes.input}
        ></input>
        <p>{usernameError ? usernameError : ""}</p>
      </div>
      <div className={classes.control}>
        <label htmlFor="email" className={classes.label}>
          Email
        </label>
        <input
          ref={enteredEmail}
          type="email"
          id="email"
          className={classes.input}
        ></input>
        <p>{emailError ? emailError : ""}</p>
      </div>
      <div className={classes.control}>
        <label htmlFor="password" className={classes.label}>
          Password
        </label>
        <input
          ref={enteredPassword}
          type="password"
          id="password"
          className={classes.input}
        ></input>
        <p>{passwordError ? passwordError : ""}</p>
      </div>
      <Button class="flat" typ="submit">
        Signup
      </Button>
      <Link style={{ marginLeft: "1rem" }} to="/login">
        Already have an account? Log in here
      </Link>
    </Form>
  );
}
