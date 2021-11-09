import Form from "../components/From";
import classes from "../components/Form.modules.css";
export default function Login() {
  return (
    <Form>
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
    </Form>
  );
}
