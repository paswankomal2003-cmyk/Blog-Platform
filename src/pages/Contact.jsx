function Contact() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-slate-600">
            Have questions or suggestions? Send us a message.
          </p>
        </div>

        <form className="bg-white p-8 rounded-3xl shadow space-y-5">
          <input type="text" placeholder="Your Name" className="w-full border px-4 py-3 rounded-xl" />
          <input type="email" placeholder="Your Email" className="w-full border px-4 py-3 rounded-xl" />
          <textarea placeholder="Message" className="w-full border px-4 py-3 rounded-xl h-32"></textarea>

          <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;