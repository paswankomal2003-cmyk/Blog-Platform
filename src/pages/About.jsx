import { Link } from "react-router-dom";

function About() {
  const features = [
    {
      title: "Easy Blog Creation",
      desc: "Create and publish blogs with a clean and simple writing experience.",
    },
    {
      title: "Secure Authentication",
      desc: "Users can register, login, and manage their personal blogging account.",
    },
    {
      title: "Comments & Interaction",
      desc: "Readers can comment on blogs and interact with authors easily.",
    },
    {
      title: "Manage Posts",
      desc: "Edit and delete your blogs anytime from your personal dashboard.",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-indigo-400 font-semibold mb-3">
            About BlogSphere
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            A Modern Platform to Write, Share & Grow
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-lg">
            BlogSphere helps users create posts, manage blogs, and connect with
            readers through meaningful comments.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/blogs"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-semibold"
            >
              Explore Blogs
            </Link>

            <Link
              to="/create-blog"
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-slate-950"
            >
              Start Writing
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
          alt="Blog writing"
          className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
        />

        <div>
          <p className="text-indigo-600 font-semibold mb-2">Our Story</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Built for Writers, Readers, and Creative Thinkers
          </h2>

          <p className="text-slate-600 leading-8">
            BlogSphere is designed as a professional blogging platform where
            users can share knowledge, publish articles, and build a strong
            writing presence online. It provides a smooth experience for
            creating, editing, deleting, and reading blog posts.
          </p>

          <p className="text-slate-600 leading-8 mt-4">
            With user authentication and comment features, the platform also
            allows readers to interact with authors and create an active
            community around ideas.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-indigo-600 font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Everything Needed for a Blog Platform
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-3xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-7">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-indigo-600 text-white rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-indigo-100 font-semibold mb-2">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Empower Every User to Share Knowledge Online
            </h2>
          </div>

          <p className="text-indigo-100 leading-8">
            Our mission is to provide a clean, secure, and easy-to-use blogging
            experience where users can write freely, manage their content, and
            connect with readers through comments.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-slate-950 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Share Your Story?
          </h2>

          <p className="text-slate-300 mb-8">
            Create your first blog and start building your writing community.
          </p>

          <Link
            to="/create-blog"
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl font-semibold"
          >
            Create Your First Blog
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;