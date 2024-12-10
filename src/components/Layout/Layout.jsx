import Navigation from "../Navigation/Navigation";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="container">
      <header className="header">
        <NavLink to="/">Home</NavLink>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}
