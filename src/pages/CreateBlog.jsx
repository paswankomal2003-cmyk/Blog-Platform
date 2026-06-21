function CreateBlog() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white p-8 rounded-3xl shadow">
        <h1 className="text-3xl font-bold mb-6">Create New Blog</h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border px-4 py-3 rounded-xl"
          />

          <select className="w-full border px-4 py-3 rounded-xl">
            <option>Select Category</option>
            <option>Technology</option>
            <option>Design</option>
            <option>Business</option>
            <option>Lifestyle</option>
          </select>

          <input
            type="text"
            placeholder="Cover Image URL"
            className="w-full border px-4 py-3 rounded-xl"
          />

          <textarea
            placeholder="Write your blog content..."
            className="w-full border px-4 py-3 rounded-xl h-64"
          ></textarea>

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl">
            Publish Blog
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateBlog;