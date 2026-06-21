import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
      <aside className="bg-slate-950 text-white p-6 rounded-3xl h-fit">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="space-y-4">
          <Link to="/dashboard" className="block">Overview</Link>
          <Link to="/create-blog" className="block">Create Blog</Link>
          <Link to="/saved-blogs" className="block">Saved Blogs</Link>
          <Link to="/profile" className="block">Profile</Link>
        </div>
      </aside>

      <main className="md:col-span-3">
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">Total Posts</h3>
            <p className="text-3xl font-bold">{blogs.length}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">Total Comments</h3>
            <p className="text-3xl font-bold">24</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-slate-500">Total Views</h3>
            <p className="text-3xl font-bold">1.2K</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow">
          <h2 className="text-2xl font-bold mb-5">My Posts</h2>

          <div className="space-y-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="flex justify-between items-center border p-4 rounded-xl">
                <div>
                  <h3 className="font-bold">{blog.title}</h3>
                  <p className="text-sm text-slate-500">{blog.category}</p>
                </div>

                <div className="flex gap-3">
                  <Link to={`/edit-blog/${blog.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                    Edit
                  </Link>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Dashboard;