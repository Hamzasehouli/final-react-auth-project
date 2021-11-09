import classes from "./Button.module.css";
export default function Button(props) {
  return (
    <button type={props.typ} className={classes[props.class]}>
      {props.children}
    </button>
  );
}
