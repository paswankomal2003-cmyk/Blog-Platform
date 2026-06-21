import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-3xl shadow max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Create Account</h1>

        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full border px-4 py-3 rounded-xl" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-xl" />
          <input type="password" placeholder="Password" className="w-full border px-4 py-3 rounded-xl" />

          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl">
            Register
          </button>
        </form>

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;