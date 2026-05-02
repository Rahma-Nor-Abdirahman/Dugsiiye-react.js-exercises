import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-red-500 font-bold"
      : "text-gray-700 hover:text-red-400";

  return (
    <div className="max-w-6xl mx-auto p-6">
      <nav className="flex justify-between items-center mb-10 border-b pb-4">
        <h1 className="text-2xl font-bold text-pink-500">
          Recipe Book
        </h1>

        <div className="flex gap-6">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/recipes" className={linkStyle}>
            Recipes
          </NavLink>

          <NavLink to="/categories" className={linkStyle}>
            Categories
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}