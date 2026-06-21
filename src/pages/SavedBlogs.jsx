import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";

function SavedBlogs() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Saved Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {blogs.slice(0, 2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}

export default SavedBlogs;