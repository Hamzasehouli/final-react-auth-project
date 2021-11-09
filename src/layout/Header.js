import { Link } from "react-router-dom";
import "./Header.modules.css";
export default function Header() {
  return (
    <nav>
      <p>
        <Link to="/">React auth project</Link>
      </p>
      <ul className="nav__links">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <p style={{ display: "none" }}>user</p>
        </li>
      </ul>
    </nav>
  );
}
