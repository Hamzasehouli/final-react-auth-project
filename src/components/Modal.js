import classes from "./Modal.module.css";
const Modal = function (props) {
  return (
    <>
      <button className={classes.btn} onClick={props.onClick} type="button">
        confirm
      </button>
    </>
  );
};

export default Modal;
