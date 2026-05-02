import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6 justify-center">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">Recipes</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </nav>
  );
}