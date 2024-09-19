import { NavLink } from "react-router-dom";
import ButtonDarkButon from "../ButtonDarkMode/ButtonDarkMode";
import "./Style.css";

export default function NavigationBar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const nonActiveLink = "nav-list__link";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>TimShare's</strong> portfolio
          </NavLink>
          <ButtonDarkButon />
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? activeLink : nonActiveLink;
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return isActive ? activeLink : nonActiveLink;
                }}
              >
                Projects
              </NavLink>
            </li>
            {/* <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? activeLink : nonActiveLink;
                }}
              >
                Portfolio
              </NavLink>
            </li> */}
            <li className="nav-list__item">
              <NavLink
                to="/contacts"
                className={({ isActive }) => {
                  return isActive ? activeLink : nonActiveLink;
                }}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
