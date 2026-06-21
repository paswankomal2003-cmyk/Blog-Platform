import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Blog<span className="text-indigo-400">Sphere</span>
        </Link>

        <div className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:text-indigo-400">Home</Link>
          <Link to="/blogs" className="hover:text-indigo-400">Blogs</Link>
          <Link to="/categories" className="hover:text-indigo-400">Categories</Link>
          <Link to="/about" className="hover:text-indigo-400">About</Link>
          <Link to="/contact" className="hover:text-indigo-400">Contact</Link>
          <Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link>
        </div>

        <div className="flex gap-3">
          <Link to="/login" className="px-4 py-2 rounded-lg border border-indigo-400 text-sm">
            Login
          </Link>
          <Link to="/create-blog" className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm">
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;