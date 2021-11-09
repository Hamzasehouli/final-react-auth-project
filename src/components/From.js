import classes from "./Form.module.css";
export default function Form(props) {
  return <form className={classes.form}>{props.children}</form>;
}
