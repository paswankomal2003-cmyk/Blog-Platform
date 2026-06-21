import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* CTA */}
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-10 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Ready to Share Your Story?
          </h2>
          <p className="text-indigo-100 mb-6">
            Start writing and connect with readers around the world.
          </p>
          <Link
            to="/create-blog"
            className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-slate-100"
          >
            Create Blog
          </Link>
        </div>

        {/* Footer Main */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold">
              Blog<span className="text-indigo-400">Sphere</span>
            </Link>

            <p className="text-slate-400 mt-4 leading-7 max-w-md">
              Share stories, ideas, and knowledge with readers worldwide.
              Create blogs, manage posts, and interact through comments.
            </p>

            <div className="flex gap-3 mt-6">
              <a className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center">
                <FaFacebookF />
              </a>
              <a className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center">
                <FaInstagram />
              </a>
              <a className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center">
                <FaLinkedinIn />
              </a>
              <a className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center">
                <FaXTwitter />
              </a>
              <a className="w-10 h-10 bg-slate-800 hover:bg-indigo-600 rounded-full flex items-center justify-center">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400">Blogs</Link></li>
              <li><Link to="/categories" className="hover:text-indigo-400">Categories</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400">About</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
              <li><Link to="/dashboard" className="hover:text-indigo-400">Dashboard</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Categories</h3>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/blogs" className="hover:text-indigo-400">Technology</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400">Design</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400">Travel</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400">Business</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400">Health</Link></li>
              <li><Link to="/blogs" className="hover:text-indigo-400">Lifestyle</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Newsletter</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to get latest blogs and updates.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white outline-none focus:border-indigo-500"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Trust Row */}
        <div className="grid sm:grid-cols-3 gap-4 mt-12 border-t border-slate-800 pt-8 text-slate-400 text-sm">
          <p>✓ Secure Authentication</p>
          <p>✓ Community Driven</p>
          <p>✓ Modern Publishing Platform</p>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© 2026 BlogSphere. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="hover:text-indigo-400 font-semibold"
          >
            Back To Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;