import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex gap-6 bg-blue-600 p-4 text-white text-xl">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/services" className="hover:underline">Services</Link>
      <Link to="/contact" className="hover:underline">Contact</Link>
    </nav>
  );
}
