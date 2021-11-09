import { useRef } from "react";
import { Link } from "react-router-dom";
import Form from "../components/From";
import classes from "../components/Form.module.css";
import Button from "../components/Button";
export default function Login() {
  const enteredUsername = useRef();
  const enteredPassword = useRef();

  const submitHandler = function (e) {
    e.preventDefault();
    const username = enteredUsername.current.value;
    const password = enteredPassword.current.value;
    const body = {
      username,
      password,
    };
  };

  return (
    <Form onSubmit={submitHandler}>
      <h2>Login</h2>
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
      </div>
      <Button class="flat" typ="submit">
        Login
      </Button>
      <Link style={{ marginLeft: "1rem" }} to="/signup">
        Do not have an account yet? Sign up here
      </Link>
    </Form>
  );
}
