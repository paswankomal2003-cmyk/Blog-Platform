import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import BlogCard from "../components/BlogCard";
import FAQSection from "../components/FAQSection";
import { Lock, FileText, MessageCircle, LayoutDashboard } from "lucide-react";

function Home() {
  const features = [
    { title: "Authentication", desc: "Login and register system", icon: "🔐" },
    { title: "Blog CRUD", desc: "Create, edit, and delete blogs", icon: "📝" },
    { title: "Comments", desc: "Readers can comment on posts", icon: "💬" },
    { title: "Dashboard", desc: "Manage posts from one place", icon: "📊" },
  ];

  const techStack = ["React", "Tailwind CSS", "React Router", "Node.js", "MongoDB"];

  const categories = ["React", "UI/UX", "Travel", "Food", "Business", "Technology"];

  const authors = [
    { name: "Komal Paswan", role: "Frontend Developer", posts: 12 },
    { name: "Aman Sharma", role: "Travel Blogger", posts: 8 },
    { name: "Priya Gupta", role: "Food Writer", posts: 10 },
  ];

  const featuredBlog = blogs[0];

  return (
    <div className="bg-slate-50">
      {/* 1. Split Hero */}
        


    <section className="min-h-screen bg-[#030816] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-block bg-indigo-900/60 text-indigo-200 px-5 py-2 rounded-full font-semibold mb-8">
            Modern Blog Platform
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Build. Write. <br /> Share.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl mb-10">
            A clean blogging platform for creators and developers with blog CRUD,
            authentication, comments, and dashboard UI.
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <Link
                to="/create-blog"
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold"
              >
                Create Blog
              </Link>

              <Link
                to="/blogs"
                className="border border-slate-600 hover:border-indigo-400 px-6 py-3 rounded-xl font-semibold"
              >
                Explore Blogs
              </Link>
          </div>

          
        </div>

        {/* Right Photo Collage */}
        <div className="relative h-[620px] hidden lg:block">
          <div className="absolute top-8 left-20 rotate-3">
            <Photo img="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80" className="w-72 h-48" />
          </div>

          <div className="absolute top-28 right-4 -rotate-2 z-20">
            <Photo img="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80" className="w-64 h-52" />
          </div>

          <div className="absolute top-36 left-72 z-30">
            <Photo img="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80" className="w-80 h-96" />
          </div>

          <div className="absolute bottom-14 left-10 -rotate-6 z-20">
            <Photo img="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" className="w-72 h-56" />
          </div>

          <div className="absolute bottom-20 right-0 rotate-6 z-10">
            <Photo img="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80" className="w-72 h-48" />
          </div>

          {/* Dots */}
          <div className="absolute top-4 right-36 grid grid-cols-5 gap-4 opacity-80">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
            ))}
          </div>

          {/* Decorative Curve */}
          <div className="absolute bottom-4 right-10 w-48 h-24 border-b-4 border-r-4 border-indigo-500 rounded-full rotate-12 opacity-80"></div>
        </div>
      </div>
    </section>

      {/* 2. Category Explorer */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Explore Categories</h2>

        <div className="flex gap-4 overflow-x-auto pb-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to="/categories"
              className="min-w-fit bg-white border hover:border-indigo-500 hover:text-indigo-600 px-6 py-3 rounded-full shadow-sm font-semibold"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>


      {/* 5. Featured Article */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-3xl shadow overflow-hidden">
          <img
            src={featuredBlog.image}
            alt={featuredBlog.title}
            className="h-full min-h-[350px] w-full object-cover"
          />

          <div className="p-8 flex flex-col justify-center">
            <p className="text-indigo-600 font-semibold">
              Featured Article
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              {featuredBlog.title}
            </h2>

            <p className="text-slate-600 leading-7 mt-4">
              {featuredBlog.desc}
            </p>

            <p className="text-slate-500 mt-4">
              By {featuredBlog.author} • {featuredBlog.readTime}
            </p>

            <Link
              to={`/blogs/${featuredBlog.id}`}
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl w-fit"
            >
              Read Featured Blog
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Latest Posts Grid */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            
            <h2 className="text-3xl md:text-4xl font-bold">
              Fresh Articles for You
            </h2>
          </div>

          <Link
            to="/blogs"
            className="bg-slate-950 text-white px-6 py-3 rounded-xl hover:bg-indigo-600"
          >
            View All
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.slice(0, 6).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>

      {/* 7. Author Dashboard Preview */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl shadow p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-indigo-600 font-semibold mb-2">
              Author Dashboard
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Manage Posts Like a Professional
            </h2>

            <p className="text-slate-600 leading-7">
              Track your blogs, comments, views, and drafts using a clean
              dashboard interface.
            </p>

            <Link
              to="/dashboard"
              className="inline-block mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
            >
              Open Dashboard
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-slate-50 border p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">24</h3>
              <p className="text-slate-500">Total Posts</p>
            </div>

            <div className="bg-slate-50 border p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">240</h3>
              <p className="text-slate-500">Comments</p>
            </div>

            <div className="bg-slate-50 border p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">1.2K</h3>
              <p className="text-slate-500">Views</p>
            </div>

            <div className="bg-slate-50 border p-6 rounded-2xl">
              <h3 className="text-3xl font-bold">6</h3>
              <p className="text-slate-500">Drafts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra: Popular Authors */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-10">
          <p className="text-indigo-600 font-semibold">Popular Authors</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet Our Writers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {authors.map((author, index) => (
            <div
              key={author.name}
              className="bg-white p-6 rounded-3xl shadow text-center hover:shadow-xl transition"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${index + 20}`}
                alt={author.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />

              <h3 className="text-xl font-bold">{author.name}</h3>
              <p className="text-slate-500">{author.role}</p>
              <p className="text-indigo-600 font-semibold mt-3">
                {author.posts} Posts
              </p>
            </div>
          ))}
        </div>
      </section>

          <FAQSection />

      {/* 8. CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-indigo-600 text-white rounded-3xl p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Publishing Your Ideas Today
          </h2>

          <p className="text-indigo-100 max-w-2xl mx-auto mb-8">
            Create your first post and build your own writing community.
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

const Feature = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 border-r border-gray-700 pr-5 last:border-none">
      <span className="text-indigo-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

const Photo = ({ img, className }) => {
  return (
    <div
      className={`${className} rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gray-800`}
    >
      <img src={img} alt="blog collage" className="w-full h-full object-cover" />
    </div>
  );
};

export default Home;