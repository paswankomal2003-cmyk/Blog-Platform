import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

function EditBlog() {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-3xl shadow">
        <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

        <form className="space-y-5">
          <input
            type="text"
            defaultValue={blog?.title}
            className="w-full border px-4 py-3 rounded-xl"
          />

          <input
            type="text"
            defaultValue={blog?.category}
            className="w-full border px-4 py-3 rounded-xl"
          />

          <input
            type="text"
            defaultValue={blog?.image}
            className="w-full border px-4 py-3 rounded-xl"
          />

          <textarea
            defaultValue={blog?.content}
            className="w-full border px-4 py-3 rounded-xl h-64"
          ></textarea>

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl">
            Update Blog
          </button>
        </form>
      </div>
    </section>
  );
}

export default EditBlog;