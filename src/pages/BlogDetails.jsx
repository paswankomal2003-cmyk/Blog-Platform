import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";

function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return <h2 className="text-center mt-20 text-2xl">Blog not found</h2>;
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <img src={blog.image} alt={blog.title} className="w-full h-96 object-cover rounded-3xl" />

      <div className="mt-6">
        <span className="text-indigo-600 font-semibold">{blog.category}</span>
        <h1 className="text-4xl font-bold mt-3">{blog.title}</h1>

        <p className="text-slate-500 mt-3">
          By {blog.author} • {blog.date} • {blog.readTime}
        </p>

        <div className="flex gap-3 mt-5">
          <Link to={`/edit-blog/${blog.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
            Edit
          </Link>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Delete
          </button>
        </div>

        <p className="mt-8 text-lg leading-8 text-slate-700">{blog.content}</p>
      </div>

      <div className="mt-12 bg-white p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        <textarea
          placeholder="Write your comment..."
          className="w-full border rounded-xl p-4 h-28 outline-indigo-500"
        ></textarea>

        <button className="mt-3 bg-indigo-600 text-white px-6 py-2 rounded-lg">
          Post Comment
        </button>

        <div className="mt-6 space-y-4">
          {blog.comments.map((comment, index) => (
            <div key={index} className="border p-4 rounded-xl">
              <h4 className="font-semibold">{comment.name}</h4>
              <p className="text-slate-600">{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogDetails;