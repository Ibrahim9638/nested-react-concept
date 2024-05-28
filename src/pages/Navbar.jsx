import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="text-center flex justify-evenly
      text-white text-2xl p-5 bg-slate-500">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
