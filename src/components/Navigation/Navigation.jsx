import { NavLink } from "react-router-dom";
import "./Navigation.css"

export default function Navigation() {
  return (
    <nav className="main-nav">
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/greeting">Greeting</NavLink>
      <NavLink to="/news">News</NavLink>
    </nav>
  );
}
