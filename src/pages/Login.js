import { Link } from "react-router-dom";
import Form from "../components/From";
import classes from "../components/Form.module.css";
import Button from "../components/Button";
export default function Login() {
  return (
    <Form>
      <h2>Signup</h2>
      <div className={classes.control}>
        <label htmlFor="username" className={classes.label}>
          Username
        </label>
        <input type="text" id="username" className={classes.input}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="email" className={classes.label}>
          Email
        </label>
        <input type="email" id="email" className={classes.input}></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="password" className={classes.label}>
          Password
        </label>
        <input type="password" id="password" className={classes.input}></input>
      </div>
      <Button class="flat" type="submit">
        Signup
      </Button>
      <Link to="/signup">Do not have an account yet? Sign up here</Link>
    </Form>
  );
}
