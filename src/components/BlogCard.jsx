import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={blog.image} alt={blog.title} className="h-52 w-full object-cover" />

      <div className="p-5">
        <span className="text-sm text-indigo-600 font-semibold">
          {blog.category}
        </span>

        <h3 className="text-xl font-bold mt-2">{blog.title}</h3>

        <p className="text-slate-600 mt-2">{blog.desc}</p>

        <div className="flex justify-between items-center mt-4 text-sm text-slate-500">
          <span>{blog.author}</span>
          <span>{blog.readTime}</span>
        </div>

        <Link
          to={`/blogs/${blog.id}`}
          className="inline-block mt-5 bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;