import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "./Header.modules.css";
export default function Header(props) {
  const history = useHistory();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    setIsLoggedin(props.isLoggedin);
    setUser(props.user);
  });
  const logout = function () {
    setIsLoggedin(false);
    props.getData(false);
    document.cookie = "jwt=";
    history.push("/login");
  };

  return (
    <nav>
      <p>
        <Link to="/">React auth project</Link>
      </p>
      <ul className="nav__links">
        <li>{!isLoggedin && <Link to="/login">Login</Link>}</li>
        <li>{!isLoggedin && <Link to="/signup">Signup</Link>}</li>
        <li>
          {isLoggedin && (
            <button onClick={logout} type="button">
              Logout
            </button>
          )}
        </li>
        <li>{isLoggedin && <p>{user}</p>}</li>
      </ul>
    </nav>
  );
}
