import { useState } from "react";
import Modal from "../components/Modal";
import Backdrop from "../components/Backdrop";

const users = [
  {
    name: "hamza",
    age: 29,
    city: "tangier",
  },
  {
    name: "karim",
    age: 22,
    city: "rabat",
  },
  {
    name: "lotfi",
    age: 23,
    city: "casablanca",
  },
];

export default function Home() {
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const showModal = function () {
    setModal(!modal);
    setBackdrop(!backdrop);
  };
  // return (
  //   <>
  //     <button onClick={showModal} type="button">
  //       show modal
  //     </button>
  //     {modal && <Modal onClick={showModal}></Modal>}
  //     {backdrop && <Backdrop onClick={setBackdrop}></Backdrop>}
  //     <ul>
  //       {users.map((user) => (
  //         <li key={user.name}>
  //           <p>{user.name}</p>
  //           <p>{user.age}</p>
  //           <p>{user.city}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );

  return <p>Homepage</p>;
}
