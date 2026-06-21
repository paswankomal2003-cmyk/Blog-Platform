import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

function Blogs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-3">All Blog Posts</h1>
      <p className="text-slate-600 mb-8">
        Explore latest posts from different categories.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default Blogs;