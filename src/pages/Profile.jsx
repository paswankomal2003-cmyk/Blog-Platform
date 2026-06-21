function Profile() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-white rounded-3xl shadow p-8 text-center">
        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto"
        />

        <h1 className="text-3xl font-bold mt-4">Komal Paswan</h1>
        <p className="text-slate-500">Frontend Developer & Blogger</p>

        <div className="grid md:grid-cols-3 gap-5 mt-8">
          <div className="border p-5 rounded-xl">
            <h3 className="text-2xl font-bold">12</h3>
            <p>Posts</p>
          </div>
          <div className="border p-5 rounded-xl">
            <h3 className="text-2xl font-bold">240</h3>
            <p>Comments</p>
          </div>
          <div className="border p-5 rounded-xl">
            <h3 className="text-2xl font-bold">1.5K</h3>
            <p>Views</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;