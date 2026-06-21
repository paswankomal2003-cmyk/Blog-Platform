import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      name: "Technology",
      icon: "💻",
      blogs: 24,
      desc: "Latest trends in coding, AI, and web development.",
    },
    {
      name: "Design",
      icon: "🎨",
      blogs: 18,
      desc: "UI/UX tips, creative ideas, and design inspiration.",
    },
    {
      name: "Travel",
      icon: "✈️",
      blogs: 15,
      desc: "Explore destinations, travel guides, and trip stories.",
    },
    {
      name: "Food",
      icon: "🍜",
      blogs: 20,
      desc: "Recipes, food reviews, and healthy meal ideas.",
    },
    {
      name: "Business",
      icon: "📈",
      blogs: 12,
      desc: "Startup tips, marketing, and business growth ideas.",
    },
    {
      name: "Health",
      icon: "🧘",
      blogs: 10,
      desc: "Fitness, wellness, lifestyle, and healthy habits.",
    },
    {
      name: "Education",
      icon: "📚",
      blogs: 16,
      desc: "Study tips, learning resources, and career guidance.",
    },
    {
      name: "Finance",
      icon: "💰",
      blogs: 9,
      desc: "Saving, budgeting, investing, and money management.",
    },
  ];

  const popularCategories = categories.slice(0, 3);

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-indigo-400 font-semibold mb-3">
            Browse Topics
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
            Explore Blog Categories
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-lg">
            Find blogs by your favorite topics and discover fresh ideas from different writers.
          </p>

          <div className="max-w-xl mx-auto mt-8">
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full px-5 py-4 rounded-2xl text-slate-800 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <p className="text-indigo-600 font-semibold">All Categories</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your Interest
            </h2>
          </div>

          <Link
            to="/create-blog"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold"
          >
            Create Blog
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white p-6 rounded-3xl shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-indigo-100 text-3xl mb-5">
                {cat.icon}
              </div>

              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>

              <p className="text-slate-600 leading-7 mb-4">
                {cat.desc}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-indigo-600">
                  {cat.blogs} Blogs
                </span>

                <Link
                  to="/blogs"
                  className="text-sm font-semibold text-slate-700 hover:text-indigo-600"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <p className="text-indigo-600 font-semibold">Popular Categories</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Most Read Topics
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {popularCategories.map((cat) => (
            <div
              key={cat.name}
              className="relative overflow-hidden rounded-3xl bg-slate-950 text-white p-8 shadow"
            >
              <div className="absolute right-6 top-6 text-6xl opacity-20">
                {cat.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">{cat.name}</h3>

              <p className="text-slate-300 leading-7 mb-6">
                {cat.desc}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-indigo-300 font-semibold">
                  {cat.blogs} Blogs Available
                </span>

                <Link
                  to="/blogs"
                  className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-semibold"
                >
                  View Blogs
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-indigo-600 text-white rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Something Valuable to Share?
          </h2>

          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Start writing your own blog and share your knowledge with readers around the world.
          </p>

          <Link
            to="/create-blog"
            className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100"
          >
            Start Writing
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Categories;